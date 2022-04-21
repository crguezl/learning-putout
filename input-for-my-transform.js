let a = 4;
function f(x) {
  let y = 2 * x;
  let z = y + y * 3; // Will it work?
  return y + z;
}
2 * f(a);
