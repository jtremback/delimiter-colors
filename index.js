var colorz = require('colors/safe')

module.exports = function (string, delimiter) {
  delimiter = delimiter || 'ÿ'
  var arr = string.split('')
  var colors = [ 'blue', 'cyan', 'green', 'yellow', 'red', 'magenta' ]
  var color = colors.pop()
  colors.unshift(color)
  var output = []
  arr.forEach(function (char) {
    if (char === delimiter) {
      color = colors.pop()
      colors.unshift(color)
      output.push(colorz.grey('::'))
    } else {
      output.push(colorz[color](char))
    }
  })
  output.pop()
  output = output.join('')
  return output
}