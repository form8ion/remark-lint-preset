import remarkPresetLintRecommended from 'remark-preset-lint-recommended';
import remarkLintListItemIndent from 'remark-lint-list-item-indent';
import remarkLintNoTabs from 'remark-lint-no-tabs';
import remarkLintFinalDefinition from 'remark-lint-final-definition';
import remarkValidateLinks from 'remark-validate-links';
import remarkLintMaximumLineLength from 'remark-lint-maximum-line-length';
import remarkLintOrderedListMarkerValue from 'remark-lint-ordered-list-marker-value';
import remarkLintNoEmptyUrl from 'remark-lint-no-empty-url';
import remarkLintUnorderedListMarkerStyle from 'remark-lint-unordered-list-marker-style';

export default {
  plugins: [
    remarkPresetLintRecommended,
    [remarkLintListItemIndent, 'space'],
    remarkLintNoTabs,
    remarkLintFinalDefinition,
    remarkValidateLinks,
    [remarkLintMaximumLineLength, 80],
    [remarkLintOrderedListMarkerValue, 'one'],
    remarkLintNoEmptyUrl,
    [remarkLintUnorderedListMarkerStyle, '*']
  ]
};
