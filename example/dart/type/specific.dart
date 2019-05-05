main(List<String> args) {
  var v = [1, 2, 3];
  print(v is List); // true
  print(v is Map);  // false
  print(v is Object); // true

  Object o = [3, 4, 5];
  print(o as List); // [3, 4, 5]
  // print(o as Map);  // Unhandled exception

  num n = 3.0;
  // int i = n;  // 报错
  double i = n;
  num x = i;
  int j = null;
}