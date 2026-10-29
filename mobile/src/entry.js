const { createApi } = require('../../app/core/api');
const { FileStore } = require('../../app/core/storage');
const videofind = require('../../app/core/videofind');
const acctclient = require('../../app/core/acctclient');
window.FSMobile = { createApi: createApi, FileStore: FileStore, videofind: videofind, acctclient: acctclient };
