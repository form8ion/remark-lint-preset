# remark-lint-preset

[remark](https://github.com/remarkjs/remark) [preset](https://github.com/remarkjs/remark/blob/master/doc/plugins.md#list-of-presets)
to configure [remark-lint](https://github.com/remarkjs/remark-lint) with
markdown style conventions

<!-- status badges -->
[![Build Status][ci-badge]][ci-link]

## Usage

<!-- consumer badges -->
[![npm][npm-badge]][npm-link]
[![MIT license][license-badge]][license-link]

### Installation

```sh
$ npm install remark remark-cli @form8ion/remark-lint-preset --save-dev
```

### Configure

Add to the project's `.remarkrc.js`:

```js
exports.plugins = ['@form8ion/remark-lint-preset'];
```

Add an npm script that will run as part of `npm test`:

```
"lint:md": "remark --frail ."
```

## Contributing

<!-- contribution badges -->
[![Conventional Commits][commit-convention-badge]][commit-convention-link]
[![Commitizen friendly][commitizen-badge]][commitizen-link]
[![semantic-release][semantic-release-badge]][semantic-release-link]
[![PRs Welcome][PRs-badge]][PRs-link]
[![Greenkeeper badge](https://badges.greenkeeper.io/form8ion/remark-lint-preset.svg)](https://greenkeeper.io/)

### Dependencies

```sh
$ nvm install
$ npm install
```

### Verification

```sh
$ npm test
```

[npm-link]: https://www.npmjs.com/package/@form8ion/remark-lint-preset
[npm-badge]: https://img.shields.io/npm/v/@form8ion/remark-lint-preset.svg
[license-link]: LICENSE
[license-badge]: https://img.shields.io/github/license/form8ion/remark-lint-preset.svg
[ci-link]: https://travis-ci.com/form8ion/remark-lint-preset
[ci-badge]: https://img.shields.io/travis/com/form8ion/remark-lint-preset/master.svg
[commit-convention-link]: https://conventionalcommits.org
[commit-convention-badge]: https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg
[commitizen-link]: http://commitizen.github.io/cz-cli/
[commitizen-badge]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[semantic-release-link]: https://github.com/semantic-release/semantic-release
[semantic-release-badge]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[PRs-link]: http://makeapullrequest.com
[PRs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg
