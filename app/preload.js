const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('fsApi', {
  isApp: true,
  call: (method, url, body) => ipcRenderer.invoke('api', method, url, body),
  info: () => ipcRenderer.invoke('app:info'),
  findVideos: (req) => ipcRenderer.invoke('video:find', req),
  phoneInfo: () => ipcRenderer.invoke('phone:info'),
  phoneEnable: (on) => ipcRenderer.invoke('phone:enable', on),
  phoneCode: () => ipcRenderer.invoke('phone:code'),
  phoneUnpair: (id) => ipcRenderer.invoke('phone:unpair', id),
  acct: (op, payload) => ipcRenderer.invoke('acct', op, payload),
  sessionState: (st) => ipcRenderer.invoke('session:state', st),
  allowVideo: (id) => ipcRenderer.invoke('video:allow', id),
  openVideo: (id) => ipcRenderer.invoke('video:open', id),
  closeVideo: () => ipcRenderer.invoke('video:close'),
  onVideoClosed: (cb) => { ipcRenderer.on('video:closed', () => cb()); },
  lockStart: (cfg) => ipcRenderer.invoke('lock:start', cfg),
  lockStop: () => ipcRenderer.invoke('lock:stop'),
  onRemote: (cb) => { ipcRenderer.on('remote:session', (_e, st) => cb(st)); },
  onNotify: (cb) => { ipcRenderer.on('notify', (_e, n) => cb(n)); },
  onDistraction: (cb) => { ipcRenderer.on('distraction', (_e, d) => cb(d)); }
});
