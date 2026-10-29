'use strict';
const { wrap } = require('./_lib');
module.exports = wrap(async () => ({ googleClientId: process.env.GOOGLE_CLIENT_ID || '', app: 'FutureSelf', v: 1 }));
