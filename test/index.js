var test = require('tape')
var colorize = require('../')

test(function (t) {
  var colorized = colorize('ÿiÿcontent.score,timestampÿ5ÿ\"29304932\"ÿ39djdjj31ÿ')
  console.log(colorized)
  t.equal(colorized, '\x1b[90m::\x1b[39m\x1b[31mi\x1b[39m\x1b[90m::\x1b[39m\x1b[33mc\x1b[39m\x1b[33mo\x1b[39m\x1b[33mn\x1b[39m\x1b[33mt\x1b[39m\x1b[33me\x1b[39m\x1b[33mn\x1b[39m\x1b[33mt\x1b[39m\x1b[33m.\x1b[39m\x1b[33ms\x1b[39m\x1b[33mc\x1b[39m\x1b[33mo\x1b[39m\x1b[33mr\x1b[39m\x1b[33me\x1b[39m\x1b[33m,\x1b[39m\x1b[33mt\x1b[39m\x1b[33mi\x1b[39m\x1b[33mm\x1b[39m\x1b[33me\x1b[39m\x1b[33ms\x1b[39m\x1b[33mt\x1b[39m\x1b[33ma\x1b[39m\x1b[33mm\x1b[39m\x1b[33mp\x1b[39m\x1b[90m::\x1b[39m\x1b[32m5\x1b[39m\x1b[90m::\x1b[39m\x1b[36m"\x1b[39m\x1b[36m2\x1b[39m\x1b[36m9\x1b[39m\x1b[36m3\x1b[39m\x1b[36m0\x1b[39m\x1b[36m4\x1b[39m\x1b[36m9\x1b[39m\x1b[36m3\x1b[39m\x1b[36m2\x1b[39m\x1b[36m"\x1b[39m\x1b[90m::\x1b[39m\x1b[34m3\x1b[39m\x1b[34m9\x1b[39m\x1b[34md\x1b[39m\x1b[34mj\x1b[39m\x1b[34md\x1b[39m\x1b[34mj\x1b[39m\x1b[34mj\x1b[39m\x1b[34m3\x1b[39m\x1b[34m1\x1b[39m')
  t.end()
})