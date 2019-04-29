# 参数

函数总是有一个形式参数列表，虽然这个参数列表可能为空，并且getter方法是没有参数列表的。参数要么是位置型的，要么是命名型的。    
##### 位置参数

位置参数可以是必填的或可选的，下面是一些拥有必填参数的函数：     

<!--sec data-title="Dart" data-id="section1" data-show=true ces-->
```dart
// zero() => 0;
get zero => 0;  // 与上面是等效的
id(x) => x;
identity(x) {
  return x;
}
add(a, b) => a + b;
```
<!--endsec-->

<!--sec data-title="TypeScript" data-id="section2" data-show=true data-collapse=false ces-->
```javascript
const zero = () => 0
const id = (x) => x
function identity(x) {
  return x
}
const add = (a, b) => a + b
```
<!--endsec-->

可选参数必须排列在一起，放置在参数列表尾部并且用方括号包裹。任意必填参数都必须出现在可选参数前面，可选参数可以指定默认值但必须是编译时常量。     

<!--sec data-title="Dart" data-id="section3" data-show=true ces-->
```dart
increment(x, [step = 1]) => x + step;

main(List<String> args) {
  print(increment(1));  // 2
  print(increment(2, 4)); // 6
  // print(increment()); // 运行时错误
  // print(increment(2, 3, 4));  // 运行时错误
}
```
<!--endsec-->

<!--sec data-title="TypeScript" data-id="section4" data-show=true data-collapse=false ces-->
```javascript
const increment = (x, step = 1) => x + step

console.log(increment(1));  // 2
console.log(increment(2, 4)); // 6
// console.log(increment()); // 运行时错误
// console.log(increment(2, 3, 4));  // 运行时错误
```
<!--endsec-->

##### 命名参数

参数可以是位置参数或命名参数。命名参数一般用于参数是一个类似合集的情况，命名参数要在位置参数之后声明并用大括号包裹。     

<!--sec data-title="Dart" data-id="section5" data-show=true ces-->
```dart
// printCities(name1, { name2, name3 = "Guangzhou" }) {
//   print('Name 1 is $name1');
//   print('Name 2 is $name2');
//   print('Name 3 is $name3');
// }
printCities(name1, { name2, name3: "Guangzhou" }) { // 与上面是等效的，这里必须用双引号，不能用单引号
  print('Name 1 is $name1');
  print('Name 2 is $name2');
  print('Name 3 is $name3');
}

main(List<String> args) {
  printCities('Beijing', name2: 'Shanghai');
}
```
<!--endsec-->

<!--sec data-title="TypeScript" data-id="section6" data-show=true data-collapse=false ces-->
```javascript
function printCities(name1, { name2, name3 = 'Guangzhou' }) {
  console.log(`Name 1 is ${name1}`);
  console.log(`Name 2 is ${name2}`);
  console.log(`Name 3 is ${name3}`);
}

printCities('Beijing', { name2: 'Shanghai' });
```
<!--endsec-->

输出：     

```javascript
Name 1 is Beijing
Name 2 is Shanghai
Name 3 is Guangzhou
```

##### 高阶函数

前面我们介绍过，函数可以作为参数传入也可以作为函数的输出，一般称其为高阶函数，下面是一个结合上面所有技能点编写的示例：     

<!--sec data-title="Dart" data-id="section7" data-show=true ces-->
```dart
var map = new Map();
fail() => throw('Key not found');
lookup(key, { ifMissing: fail }) {
  var result = map[key];
  if (result == null) return ifMissing();
  return result;
}

main(List<String> args) {
  lookup('anything'); // 抛出错误
  lookup('anything', ifMissing: () => map['anything'] = 42);  // 42
}
```
<!--endsec-->

<!--sec data-title="TypeScript" data-id="section8" data-show=true data-collapse=false ces-->
```javascript
let __map = new Map<string, number>();
const fail = (): void => { throw new Error('Key not found') }
function lookup(key, { ifMissing = fail } = {}) {
  let result = __map[key]
  if (result == null) return ifMissing()
  return result
}

lookup('anything')  // 抛出错误
lookup('anything', { ifMissing: () => __map['anything'] = 42 }) // 42
```
<!--endsec-->

可以看出我们将ifMissing作为命名参数，并且为它增加了一个默认值，该默认值是一个抛出异常的函数，在没有传递第二个参数时，该函数会自动执行fail()函数从而抛出一个Key not found的异常。由于第二个参数是一个可选参数，因此我们完全可以自定义该参数，为其实现一个自定义的函数实现。    
