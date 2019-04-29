foo(a, b, c, { d, e: "fastman" }) {
  print('param a is: $a');
  print('param b is: $b');
  print('param c is: $c');
  print('param d is: $d');
  print('param e is: $e');
}

main(List<String> args) {
  Function.apply(foo, [1, 2, 3], { #d: 4, #e: 5 });
}