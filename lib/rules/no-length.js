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
      description: 'Disallow the use of `Length`',
      category: 'Best Practices',
      recommended: false,
    },
    fixable: 'code',
    schema: [], // JSON schema for rule options
  },
  create(context) {
    return {
      MemberExpression (node) {
        if (node.property.type === 'Identifier' && node.property.name === 'Length') {
          context.report({
            node: node.property,
            message: 'Use `length` instead of `Length`.',
            fix(fixer) {
              return fixer.replaceText(node.property, 'length');
            },
          });
        }
      },
    };
  },
};
