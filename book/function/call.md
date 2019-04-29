# 函数调用

函数可以通过标准的方式来调用，即在函数值表达式后面加上一个括号参数列表，例如：print('Hello World')。     

有些函数被称为getter，可以不使用参数列表来调用。     

```dart
true.runtimeType; // bool
```

在Dart中，方法与字段不是通过相同的语法来访问的。尽管getter和字段没有区别对待，摆正了表征独立，但getter与方法是通过不同的语法访问的。因此Dart开发者需要注意一个函数是被声明为getter还是一个无参数的方法。这种情况同样适用于setter。      

#### 级联符号

除了平常使用点云算法来执行成员选择外，Dart也支持使用双点符号进行方法级联。当我们需要对一个对象执行一系列操作时，级联是非常有用的。来看下下面这个示例：     

```dart
var address = new Address.of("Freddy Kruger");
address.setStreet("Elm", "13a");
address.city = "Carthage";
address.state = "Eurasia";
address.zipCode(66666, extend: 66666);
```

我们可以使用级联符号来优化上面这段代码，它们是完全等效的：      

```dart
var address = new Address.of("Freddy Kruger");
..setStreet("Elm", "13a");
..city = "Carthage";
..state = "Eurasia";
..zipCode(66666, extend: 66666);
```

级联(..)允许我们对同一对象执行一系列操作。除了函数调用，我们还可以访问同一对象上的字段。这通常会省去创建`临时变量`的步骤，并允许我们编写更多的级联代码。     

另一种能用到级联的情况是当我们执行某个对象的方式时，我们需要的返回值是对象本身，但方法返回的却是其他值:           

<!--sec data-title="Dart" data-id="section1" data-show=true ces-->
```dart
main(List<String> args) {
  // 数组的sort是一个void函数
  var sortedColors = ['red', 'green', 'blue', 'orange', 'pink'].sublist(1, 3)..sort();
  // 等价于
  // var sortedColors = ['red', 'green', 'blue', 'orange', 'pink'].sublist(1, 3);
  // sortedColors.sort();
  print(sortedColors);  // [blue, green]
}
```
<!--endsec-->

<!--sec data-title="TypeScript" data-id="section2" data-show=true data-collapse=false ces-->
```javascript
// 数组的sort是一个返回排序后数组的函数
var sortedColors = ['red', 'green', 'blue', 'orange', 'pink'].slice(1, 3).sort();
console.log(sortedColors);  // [blue, green]
```
<!--endsec-->
