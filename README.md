# jstransformer-styl

JSTransformer support for [styl](https://github.com/tj/styl).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-styl/master.svg)](https://travis-ci.org/jstransformers/jstransformer-styl)
[![Coverage Status](https://img.shields.io/coveralls/jstransformers/jstransformer-styl/master.svg)](https://coveralls.io/r/jstransformers/jstransformer-styl?branch=master)
[![NPM version](https://img.shields.io/npm/v/jstransformer-styl.svg)](https://www.npmjs.org/package/jstransformer-styl)

## Installation

    npm install jstransformer-styl

## API

```js
var styl = require('jstransformer')(require('jstransformer-styl'))

var input = "#logo\
  width: 50px\
  height: @width\
  absolute: top 100px left 50%\
  background: linear-gradient(top, black, white)";

styl.render(input, { whitespace: true }).body
```

## License

MIT
