# 顶层

通常来说，一个库由多个顶层声明组成，这些声明可以是函数、变量及类型（main函数也是一个顶层函数）。      

```dart
library stack1;
final _contents = [];
get isEmpty => _contents.isEmpty;
```

上面的示例中我们有一个顶层变量_contents，它被初始化为一个空列表。与实例变量和类变量一样，顶层变量也会引入一个隐含的存取器。同样，用户的代码不会被直接访问变量。因为顶层变量是延迟初始化的，与类变量是一样的，只有在它们的geeter第1次被调用时才会被执行初始化。所以_contents只有在某个访问它的方法被调用时才会被设置为[]。      

顶层变量和类变量一起被称为静态变量。它们的区别就在于作用域，即在什么范围内能够通过名称来对它们进行访问。类变量的作用域被限制在声明它的类中（甚至子类也无法访问它们），顶层变量（也叫库变量）的作用域则是覆盖了声明它们的整个库。库作用域通常由多个类与函数构成。      

与类变量一样，顶层变量也可以声明为final，在这种情况下，它们没有定义setter且必须在声明时就初始化。也可以把静态变量声明为常量，那样它们只能被赋予一个编译时常量且自身被视为不可变。     

顶层函数（也叫库方法）的作用域规则和顶层变量是一样的，在这个库中都是可用的，它可以是普通函数、getter和setter。除了顶层函数与变量，我们也可以声明顶层类。在Dart中类的声明都是顶层的，因为Dart并不支持类的嵌套。       