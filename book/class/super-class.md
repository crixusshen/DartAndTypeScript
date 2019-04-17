# 父类

每个类都声明了一组实例成员，包括实例变量和各种实例方法。另外，每个类（Object类除外）继承了父类的实例成员。由于除了Object类外的所有类都只有一个父类，而Object类没有父类，所以Dart类层次结构形成了一个以Object类为根的树。这种结构被称为单继承。   

如果子类声明了一个与父类的某个方法同名的实例方法，那么可以说成子类重写了父类的方法。但是重写并不总是成立的，你不能用一个普通方法重写getter，这种情况会导致编译错误：    

<!--sec data-title="Dart" data-id="section1" data-show=true ces-->
```dart
class S {
  var v;
  final f = 0;
  get g => 32;
  set s(x) => v =2;
  m(a, b) => 91;
}

class C extends S {
  v() => 1; // 非法：方法v()重写隐含的getter方法v
  f() => 2; // 非法：方法f()重写隐含的getter方法f
  g() => 100; // 非法：方法g()重写getter方法g
  s(y) => 200;  // 非法：方法s()重写setter方法s
  m(a, b, c) => 92; // 警告：重写方法参数个数不一致
}
```
<!--endsec-->

<!--sec data-title="TypeScript" data-id="section2" data-show=true data-collapse=false ces-->
```javascript
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
  v() {
    return 1  // 非法
  }
  f() {
    return 2  // 通过：ts并不会为静态变量默认设置一个getter
  }
  g() {
    return 100  // 非法
  }
  s(y) {
    return 200  // 非法
  }
  m(a, b, c) {
    return 92 // 非法
  }
}
```
<!--endsec-->

试图用方法或getter重写setter，或者用setter重写方法或getter在技术上是不可行的。某些情况下，无意义的重写也会导致警告而不是编译错误。当一个重写方法比被重写的方法需要更多的参数时，Dart编译器将产生一个警告，但是代码仍然可以编程通过。   
