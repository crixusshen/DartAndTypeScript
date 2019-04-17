class S {
  protected v
  static f = 0
  get g() {
    return 32
  }
  set s(x) {
    this.v = 2;
  }
  m(a, b) {
    return 91
  }
}

class C extends S {
  // 注释的代码存在编译错误
  
  // v() {
  //   return 1  // 非法
  // }
  // f() {
  //   return 2  // 通过：ts并不会为静态变量默认设置一个getter
  // }
  // g() {
  //   return 100  // 非法
  // }
  // s(y) {
  //   return 200  // 非法
  // }
  // m(a, b, c) {
  //   return 92 // 非法
  // }
}