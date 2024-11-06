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
      description: 'Disallow the use of `Select`',
      category: 'Best Practices',
      recommended: false,
    },
    fixable: 'code',
    schema: [], // JSON schema for rule options
  },
  create(context) {
    return {
      CallExpression(node) {
        if (node.callee.type === 'MemberExpression' && node.callee.property.name === 'Select') {
          context.report({
            node,
            message: 'Use `map` instead of `Select`.',
            fix(fixer) {
              return fixer.replaceText(node.callee.property, 'map');
            },
          });
        }
      },
    };
  },
};
