'use strict'

const styl = require('styl')
const extend = require('extend-shallow')

exports.name = 'styl'
exports.outputFormat = 'css'

exports.render = function (str, options, locals) {
  const opts = extend({}, options, locals)
  return styl(str, opts).toString()
}
