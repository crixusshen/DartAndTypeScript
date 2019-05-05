# 函数类型

> 为函数定义类型

在Dart中，函数类型被特殊对待。所有函数都实现了Function，但函数类型之间的比较是基于它们的结构。      

函数的类型是基于它的返回值和形式参数的类型。该类型反映了参数是命名型还是位置型，位置参数是否必填，以及命名参数的名称。      

函数类型的定义是在Dart2中开始支持的。使用`typedef`关键字来定义。              

让我们来看一个函数添加类型的示例：      

<!--sec data-title="Dart" data-id="section1" data-show=true ces-->
```dart
typedef num Add(num x, num y);

// typedef void AddVoid(num x, num y);
typedef AddVoid(num x, num y); // 与上面的注释是等效的

main(List<String> args) {
  // Add myAdd = (int x, num y) => x + y;  // The function expression type '(int, num) → num' isn't of type '(num, num) → num'. This means its parameter or return type does not match what is expected. Consider changing parameter type(s) or the returned type(s).
  Add myAdd = (num _x, num y) => _x + y;
  print(myAdd(1, 2)); // 3

  AddVoid myAddVoid = (num _x, num y) => { print('void') };
  myAddVoid(1, 2); // void
}
```
<!--endsec-->

<!--sec data-title="TypeScript" data-id="section2" data-show=true data-collapse=false ces-->
```javascript
// expression 1:
const myAdd: (x: number, y: number) => number = (_x: number, y: number) => _x + y

// expression 2:
const myAdd2: {(x: number, y: number): number} = (_x: number, y: number) => _x + y

const myAddVoid: (x: number, y: number) => void = (_x: number, y: number) => console.log('void')

console.log(myAdd(1, 2))  // 3
console.log(myAdd2(1, 2))  // 3
myAddVoid(1, 2); // void
```
<!--endsec-->

这里，我们做了一些尝试，myAdd的类型是Add，Add的函数类型可以看做是`(num, num) => num`。而我们第一次尝试让myAdd的类型表示为`(int, num) => num`，但是编译器并不能通过我们的代码，虽然int是num的子类，但是编译器认为它们是两个不同的类型，这也就验证了函数的类型是基于它的返回值和形式参数的类型来断定的。      

而我们第二次又对myAdd做了一次尝试，这次把Add中的x形参名称改成了_x，编译器尽然通过了。这个问题表现出，函数类型包含两部分：参数类型和返回值类型。当写出完整函数类型的时候，这两部分都是必须的。只要参数类型是匹配的，那么就认为它是有效的函数类型，而不在乎参数名是否正确。    

第二部分是返回值类型。 对于返回值，我们在函数和返回值类型之前使用( =>)符号，使之清晰明了。 如之前提到的，返回值类型是函数类型的必要部分，如果函数没有返回任何值，你也必须指定返回值类型为 void或留空。(在TS中必须制定返回类型为void且不能留空)      

#### 可选参数和默认参数

<!--sec data-title="Dart" data-id="section3" data-show=true ces-->
```dart
// typedef Optional(int x, [int y = 1]);  // Default parameter values aren't allowed in typedefs
typedef int Optional(int x, [int y]);

main() {
  Optional myOptional = (int x, [int y = 1]) => x + y;
  print(myOptional(2)); // 3
  print(myOptional(2, 3)); // 5
}
```
<!--endsec-->

<!--sec data-title="TypeScript" data-id="section4" data-show=true data-collapse=false ces-->
```javascript
const myOptional: {(x: number, y?: number): number} = (x: number, y: number = 1) => x + y

console.log(myOptional(2))  // 3
console.log(myOptional(2, 3))  // 5
```
<!--endsec-->

typedef不允许定义默认参数，但是允许定义可选参数（同样在ts中默认参数也只允许定义在函数或构造函数中，无法使用在类型定义中）。但是在函数定义中是允许定义默认参数的。因此在myOptional函数中通过函数类型来定义可选参数y，同时在函数声明又使用了默认参数来定义y，从而同时实现了可选参数和默认参数的语法特性。      

另外有一点不得不说明下，在Dart的函数声明中是允许可选参数和默认参数的共同声明的，但是在TS中是不允许共同声明的，这是这两个语言的区别。       

#### 命名参数

需要详细了解概念可查看“函数 - 参数”这一章节，下面来看看如何使用函数类型的方式来约束命名参数的类型检查：     

<!--sec data-title="Dart" data-id="section5" data-show=true ces-->
```dart
typedef String Named(int x, {int y, String z});

main() {
  Named myNamed = (int x, {int y, String z = 'zoo'}) => (x + y).toString() + z;
  print(myNamed(1, y: 2));  // 3zoo
  print(myNamed(1, y: 2, z: 'hi'));  // 3hi
}
```
<!--endsec-->

<!--sec data-title="TypeScript" data-id="section6" data-show=true data-collapse=false ces-->
```javascript
const myNamed = (x: number, {y, z = 'zoo'}: {y: number, z?: string}) => x + y + z

console.log(myNamed(1, {y: 2})) // 3zoo
console.log(myNamed(1, {y: 2, z: 'hi'})) // 3hi
```
<!--endsec-->
