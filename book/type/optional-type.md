# 可选类型

Dart的类型是可选的。作为展示运行时行为取决于类型的语言特性，我们就需要先考虑下静态类型的方法重载。重载是静态面向对象语言（例如Java、C#）的常见特性，在这些语言中我们可以这么写：   

```java
// java:
class NotLegalDart {
  overloaded(List l) => l.length;
  overloaded(num n) => n * 2;
}

public static void main(String[] args) {
  int x = 3;
  new NotLegalDart().overloaded(x); // 6
  List l = [];
  new NotLegalDart().overloaded(l); // 0
}
```

在静态面向对象语言中我们期待通过参数的类型来区分方法的调用；但是在Dart中我们依靠什么来选择`overloaded`的实现呢？但如果我们决定给变量添加类型，其行为就会发生改变，且仅仅是因为我们决定在方法调用处给代码添加类型注释而已。基于类型的重载即使在全静态语言中也是一个存在问题的功能，因为类型不影响语义，所以Dart不支持基于类型的重载。   