/**
 * 埋め込みChatUI のスタイルをビルドするための設定ファイル
 */

const parentSelector = '.cfwgiui-wrapper'
module.exports = {
  syntax: 'postcss-scss',
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {},
    'postcss-prefix-selector': {
      prefix: parentSelector,
      transform: function (prefix, selector, prefixedSelector) {
        if (selector.startsWith('html')) {
          return selector;
        }
        return prefixedSelector;
      },
    },
    cssnano: {
      preset: ['default', {
        discardComments: {
          removeAll: true,
        },
      }],
    },
    // ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
  }
}
