# 函数声明

到目前为止，我们看到的大多数函数都是通过函数声明来进行介绍的，而构造函数、getter和setter例外。函数声明有一个函数名称，后面跟着参数列表和函数体。     

抽象方法有函数签名但是没有函数体。抽象方法从技术角度来说并不是函数声明。把它作为声明只是为了辅助静态检查器而言。      

函数声明可以出现在顶层或是作为方法存在，然而，函数也可以是局部函数。局部函数就是定义在其他函数内部的函数。请看下面的一个示例：     

<!--sec data-title="Dart" data-id="section1" data-show=true ces-->
```dart
fib(n) {
  sum(n) {
    if(n <= 1) {
      return 1;
    } else {
      return n + sum(n - 1);
    }
  }
  return sum(n);
}

main(List<String> args) {
  print(fib(5));  // 5+4+3+2+1=15
}
```
<!--endsec-->

<!--sec data-title="TypeScript" data-id="section2" data-show=true data-collapse=false ces-->
```javascript
function fib(n) {
    function sum(n) {
        if (n <= 1) {
            return 1;
        }
        else {
            return n + sum(n - 1);
        }
    }
    return sum(n);
}
console.log(fib(5)); // 5+4+3+2+1=15

```
<!--endsec-->

这并不是一个计算值递减总和的最佳方式，但是它避免了幼稚的递归计算版本所带来的浪费。由于sum()只是fib()的一个实现细节，所以最好把sum()嵌入fib()中，以避免引入一个额外的函数名而使外层命名空间收到污染。        
