// Storage: a local JSON file by default, MongoDB when MONGO_URI is set and reachable.
// Both expose the same async API: insert, find, findOne, update, remove.
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const uid = () => crypto.randomUUID().replace(/-/g, '');
const nowIso = () => new Date().toISOString();

function match(doc, flt) {
  for (const k of Object.keys(flt || {})) {
    const want = flt[k], have = doc[k];
    if (want !== null && typeof want === 'object' && !Array.isArray(want)) {
      for (const op of Object.keys(want)) {
        const v = want[op];
        if (op === '$gte' && !(have != null && have >= v)) return false;
        if (op === '$gt' && !(have != null && have > v)) return false;
        if (op === '$lte' && !(have != null && have <= v)) return false;
        if (op === '$lt' && !(have != null && have < v)) return false;
        if (op === '$ne' && have === v) return false;
        if (op === '$in' && v.indexOf(have) < 0) return false;
      }
    } else if (have !== want) return false;
  }
  return true;
}

class FileStore {
  constructor(file) {
    this.kind = 'file';
    this.file = file;
    this.data = {};
    fs.mkdirSync(path.dirname(file), { recursive: true });
    if (fs.existsSync(file)) {
      try { this.data = JSON.parse(fs.readFileSync(file, 'utf8')); }
      catch (e) { try { fs.renameSync(file, file + '.corrupt-' + Date.now()); } catch (_) { } this.data = {}; }
    }
  }
  _save() {
    const tmp = this.file + '.tmp';
    fs.writeFileSync(tmp, JSON.stringify(this.data));
    fs.renameSync(tmp, this.file);
  }
  async insert(col, doc) {
    const d = Object.assign({ created_at: nowIso() }, doc);
    if (!d._id) d._id = uid();
    (this.data[col] = this.data[col] || []).push(d);
    this._save();
    return Object.assign({}, d);
  }
  async find(col, flt, opt) {
    opt = opt || {};
    let rows = (this.data[col] || []).filter((d) => match(d, flt)).map((d) => Object.assign({}, d));
    if (opt.sort) {
      const f = Object.keys(opt.sort)[0], dir = opt.sort[f];
      rows.sort((a, b) => (a[f] < b[f] ? -1 : a[f] > b[f] ? 1 : 0) * dir);
    }
    return opt.limit ? rows.slice(0, opt.limit) : rows;
  }
  async findOne(col, flt) { return (await this.find(col, flt, { limit: 1 }))[0] || null; }
  async update(col, id, patch) {
    const d = (this.data[col] || []).find((x) => x._id === id);
    if (!d) return null;
    Object.assign(d, patch);
    this._save();
    return Object.assign({}, d);
  }
  async remove(col, flt) {
    const rows = this.data[col] || [];
    const keep = rows.filter((d) => !match(d, flt));
    const n = rows.length - keep.length;
    if (n) { this.data[col] = keep; this._save(); }
    return n;
  }
}

class MongoStore {
  constructor(db, client) { this.kind = 'mongo'; this.db = db; this.client = client; }
  static async connect(uri, dbName) {
    const { MongoClient } = require('mongodb');
    const client = new MongoClient(uri, { serverSelectionTimeoutMS: 3000 });
    await client.connect();
    await client.db('admin').command({ ping: 1 });
    return new MongoStore(client.db(dbName), client);
  }
  async insert(col, doc) {
    const d = Object.assign({ created_at: nowIso() }, doc);
    if (!d._id) d._id = uid();
    await this.db.collection(col).insertOne(d);
    return d;
  }
  async find(col, flt, opt) {
    opt = opt || {};
    let cur = this.db.collection(col).find(flt || {});
    if (opt.sort) cur = cur.sort(opt.sort);
    if (opt.limit) cur = cur.limit(opt.limit);
    return cur.toArray();
  }
  async findOne(col, flt) { return this.db.collection(col).findOne(flt || {}); }
  async update(col, id, patch) {
    await this.db.collection(col).updateOne({ _id: id }, { $set: patch });
    return this.findOne(col, { _id: id });
  }
  async remove(col, flt) { return (await this.db.collection(col).deleteMany(flt || {})).deletedCount; }
}

async function makeStore(dataDir, log) {
  const mode = (process.env.STORAGE || 'auto').toLowerCase();
  const uri = (process.env.MONGO_URI || '').trim();
  log = log || console.log;
  if (mode !== 'file' && uri) {
    try {
      const s = await MongoStore.connect(uri, process.env.MONGO_DB || 'futureself');
      log('[storage] MongoDB connected');
      return s;
    } catch (e) {
      log('[storage] MongoDB not available (' + e.message + '), using the local file instead');
      if (mode === 'mongo') throw e;
    }
  }
  const file = path.join(dataDir, 'futureself-data.json');
  log('[storage] local file ' + file);
  return new FileStore(file);
}

module.exports = { FileStore, MongoStore, makeStore, match };
