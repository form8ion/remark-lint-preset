exports.plugins = [
  require('remark-preset-lint-recommended'),
  [require('remark-lint-list-item-indent'), 'space'],
  require('remark-lint-no-tabs'),
  require('remark-lint-final-definition'),
  require('remark-validate-links'),
  [require('remark-lint-maximum-line-length'), 80],
  [require('remark-lint-ordered-list-marker-value'), 'one'],
  require('remark-lint-no-empty-url'),
  [require('remark-lint-unordered-list-marker-style'), '*']
];
