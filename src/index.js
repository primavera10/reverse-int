module.exports = function reverse(n) {
    const stringified = n.toString().split('').reverse().join('')
    return Number.parseInt(stringified, 10)
}
