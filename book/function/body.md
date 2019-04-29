# 函数体

函数体包含了函数在执行时需要计算的代码。函数体跟在函数签名之后，而且有两种形式，在前一章中我们已经看到过：     

1. 大括号括起来的语句列表（可能为空）
2. => 箭头符号后跟着的一个表达式

在第1种形式中，函数体从第1条代码开始执行，直到以下任意一种情况发生：函数最后一条代码被成功执行；一个return语句被执行，或者抛出一个没有被捕获的异常。         

Dart中的每个函数要么返回一个值，要么抛出一个异常。      

如果我们完成了最后一条语句，而且它不是return ，则我们将返回null。       

```dart
sideEffect() {
  print("I don't have a return and I don't throw an exception");
}

main(List<String> args) {
  print(sideEffect());
}
```

输出：     

```dart
I don't have a return and I don't throw an exception
null  // js中则是返回undefined类型的值，非null值
```

> 这对于学习过JavaScript的同学而言，理解起来相对比较简单，因为JavaScript中就是这样的函数设计。