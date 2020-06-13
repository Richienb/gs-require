# gs-require [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/gs-require/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/gs-require)

Use Node.js `require` in Googlescript.

## Install

Paste at the top of your script (requires [new runtime](https://developers.google.com/apps-script/guides/v8-runtime)):

```js
eval(UrlFetchApp.fetch("https://unpkg.com/gs-require@1.0.0").getContentText());
```

## Usage

```js
eval(UrlFetchApp.fetch("https://unpkg.com/gs-require@1.0.0").getContentText());

const _ = require("lodash");

_.uniq([1, 1, 2])
//=> [1, 2]
```

## API

### require(file)

#### file

Type: `string`

The package to import. If a url is provided, it is treated as a js file; otherwise it is resolved through [unpkg](https://unpkg.com).
