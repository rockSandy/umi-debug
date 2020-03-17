module.exports = {
  extends: ['stylelint-config-antife', 'stylelint-config-prettier', 'stylelint-config-rational-order'],
  plugins: ['stylelint-prettier', 'stylelint-order', 'stylelint-declaration-block-no-ignored-properties'],
  rules: {
    'prettier/prettier': true,
    'plugin/declaration-block-no-ignored-properties': true,
    'function-url-quotes': 'always'
  },
};
