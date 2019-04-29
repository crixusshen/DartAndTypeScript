function foo(a, b, c, { d, e = 'fastman' }) {
  console.log(`param a is: ${a}`);
  console.log(`param b is: ${b}`);
  console.log(`param c is: ${c}`);
  console.log(`param d is: ${d}`);
  console.log(`param e is: ${e}`);
}

foo.apply(null, [1, 2, 3, {
  d: 4,
  e: 5
}])