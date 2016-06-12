var test = require('ava');
var Vue = require('vue');
var ElDialog = require('../dist/index.js');

test('el-dialog', t => {
  t.truthy(ElDialog.install);
});
