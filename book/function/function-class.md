# Function类

Function是代表所有函数的公共顶层接口的抽象类。Function没有声明任何实例的方法，然而它声明了类方法apply()，此方法接受一个函数和一个参数列表，并使用提供的参数列表去调用传入的函数。     

apply()的签名是：     

```dart
static apply(Function function, List positionalArguments, [Map<Symbol, dynamic> namedArguments]);
```

apply()的形式参数是带有类型注解的。它需要一个被调用的函数和一个位置参数的列表（可以为空）。明明参数可以通过一个名称与实际参数组成的map来提供，且实际参数可以是任意类型的对象。最后一个参数是可选的。大部分函数不需要任何命名参数，所以只在需要时才提供它们是比较方便的。      

apply()方法提供了一种使用动态确定的参数列表来调用函数的机制。通过它，我们可以处理在编译时参数列表数量不确定的情况：     

<!--sec data-title="Dart" data-id="section1" data-show=true ces-->
```dart
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
```
<!--endsec-->

<!--sec data-title="TypeScript" data-id="section2" data-show=true data-collapse=false ces-->
```javascript
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
```
<!--endsec-->

上面的示例，最终的执行结果我们可以把它近似为：     

```dart
foo(1, 2, 3, f: 4, g: 5);
```

输出：    

```dart
param a is: 1
param b is: 2
param c is: 3
param d is: 4
param e is: 5
```
