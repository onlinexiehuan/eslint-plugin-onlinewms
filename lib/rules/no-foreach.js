/*
 * @Description: 页面功能注释
 * @FilePath: \WMS-WEB\lib\eslint-plugin-onlinewms\lib\rules\no-contains.js
 * @PGM:
 * @Author: xiehuan
 */
module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow the use of `Foreach`',
      category: 'Best Practices',
      recommended: false,
    },
    fixable: 'code',
    schema: [], // JSON schema for rule options
  },
  create(context) {
    return {
      CallExpression(node) {
        if (node.callee.type === 'MemberExpression' && node.callee.property.name === 'foreach') {
          context.report({
            node,
            message: 'Use `for` instead of `foreach`.',
            fix(fixer) {
              return fixer.replaceText(node.callee.property, 'for');
            },
            schema: [], // JSON schema for rule options
          });
        }
        if (node.callee.type === 'MemberExpression' && node.callee.property.name === 'ForEach') {
          context.report({
            node,
            message: 'Use `forEach` instead of `ForEach`.',
            fix(fixer) {
              return fixer.replaceText(node.callee.property, 'forEach');
            },
          });
        }
      },
    };
  },
};
