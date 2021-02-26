module.exports = function reverse (n) {
  const reverse = `${Math.abs(n)}`.split('').reverse().join('');
  const result = new Number(reverse);
  return result;
}
