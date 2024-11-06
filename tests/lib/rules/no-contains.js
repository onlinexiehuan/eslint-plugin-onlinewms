/*
 * @Description: 页面功能注释
 * @FilePath: \WMS-WEB\lib\eslint-plugin-onlinewms\test\lib\rules\no-contains.js
 * @PGM:
 * @Author: xiehuan
 */
// tests/lib/rules/no-contains.js
const rule = require('../../../lib/rules/no-contains');
const RuleTester = require('eslint').RuleTester;

const ruleTester = new RuleTester();

ruleTester.run('no-contains', rule, {
  valid: [
    {
      code: 'array.includes(item);',
    },
  ],
  invalid: [
    {
      code: 'array.Contains(item);',
      errors: [{ message: 'Use `includes` instead of `Contains`.' }],
      output: 'array.includes(item);',
    },
  ],
});
