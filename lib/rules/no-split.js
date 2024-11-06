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
      description: 'Disallow the use of `Split`',
      category: 'Best Practices',
      recommended: false,
    },
    fixable: 'code',
    schema: [], // JSON schema for rule options
  },
  create(context) {
    return {
      CallExpression(node) {
        if (node.callee.type === 'MemberExpression' && node.callee.property.name === 'Split') {
          context.report({
            node,
            message: 'Use `split` instead of `Split`.',
            fix(fixer) {
              return fixer.replaceText(node.callee.property, 'split');
            },
          });
        }
      },
    };
  },
};
