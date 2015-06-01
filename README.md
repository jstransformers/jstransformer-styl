# jstransformer-styl

[Styl](https://github.com/tj/styl) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-styl/master.svg)](https://travis-ci.org/jstransformers/jstransformer-styl)
[![Coverage Status](https://img.shields.io/coveralls/jstransformers/jstransformer-styl/master.svg)](https://coveralls.io/r/jstransformers/jstransformer-styl?branch=master)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-styl/master.svg)](http://david-dm.org/jstransformers/jstransformer-styl)
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
