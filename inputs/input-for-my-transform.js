let a = 4;
const unused = 'unused';
module.exports = function f(x) {
  let y = x + x;
  let z = y + y * 3; // Will it work?
  return y + z;
}
f(a) + f(a);
