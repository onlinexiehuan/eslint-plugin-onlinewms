/*
 * @Description: 页面功能注释
 * @FilePath: \WMS-WEB\lib\eslint-plugin-onlinewms\lib\rules\no-is-null-or-white-space.js
 * @PGM:
 * @Author: xiehuan
 */
module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow the use of `string.IsNullOrWhiteSpace()`',
      category: 'Best Practices',
      recommended: false,
    },
    fixable: 'code',
    schema: [],
  },
  create(context) {
    return {
      UnaryExpression(node) {
        if (node.operator === '!' && node.argument.type === 'CallExpression') {
          const callee = node.argument.callee;
          if (callee.type === 'MemberExpression' && callee.object.name === 'string' && callee.property.name === 'IsNullOrWhiteSpace') {
            const argument = node.argument.arguments[0];
            context.report({
              node,
              message: 'remove string.IsNullOrWhiteSpace()',
              data: {
                identifier: context.getSourceCode().getText(argument),
              },
              fix(fixer) {
                return fixer.replaceText(node, `${context.getSourceCode().getText(argument)}`);
              },
            });
          }
        }
      },
      CallExpression(node) {
        if (node.callee.type === 'MemberExpression' && node.callee.object.name === 'string' && node.callee.property.name === 'IsNullOrWhiteSpace') {
          const argument = node.arguments[0];
          context.report({
            node,
            message: 'remove string.IsNullOrWhiteSpace()',
            data: {
              identifier: context.getSourceCode().getText(argument),
            },
            fix(fixer) {
              return fixer.replaceText(node, `!${context.getSourceCode().getText(argument)}`);
            },
          });
        }
      },
    };
  },
};
