/*
 * @Description: 页面功能注释
 * @FilePath: \WMS-WEB\lib\eslint-plugin-onlinewms\index.js
 * @PGM:
 * @Author: xiehuan
 */
// index.js
module.exports = {
  name: 'eslint-plugin-onlinewms',
  rules: {
    'no-add': require('./lib/rules/no-add'),
    'no-any': require('./lib/rules/no-any'),
    'no-contains': require('./lib/rules/no-contains'),
    'no-foreach': require('./lib/rules/no-foreach'),
    'no-indexOf': require('./lib/rules/no-indexOf'),
    'no-is-null-or-empty': require('./lib/rules/no-is-null-or-empty'),
    'no-is-null-or-white-space': require('./lib/rules/no-is-null-or-white-space'),
    'no-length': require('./lib/rules/no-length'),
    'no-select': require('./lib/rules/no-select'),
    'no-split': require('./lib/rules/no-split'),
    'no-tostring': require('./lib/rules/no-tostring'),
    'no-where': require('./lib/rules/no-where'),
  },
};
