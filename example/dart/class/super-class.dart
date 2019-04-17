class S {
  var v;
  final f = 0;
  get g => 32;
  set s(x) => v =2;
  m(a, b) => 91;
}

class C extends S {
  // 注释的代码存在编译错误
  
  // v() => 1; // 非法：方法v()重写隐含的getter方法v
  // f() => 2; // 非法：方法f()重写隐含的getter方法f
  // g() => 100; // 非法：方法g()重写getter方法g
  // s(y) => 200;  // 非法：方法s()重写setter方法s
  // m(a, b, c) => 92; // 警告：重写方法参数个数不一致
}