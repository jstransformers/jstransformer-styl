'use strict';

var styl = require('styl');

exports.name = 'styl';
exports.outputFormat = 'css';

exports.render = function (str, options) {
  return styl(str, options).toString();
};
