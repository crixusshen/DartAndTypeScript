# 泛型

在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。       

软件工程中，我们不仅要创建一致的定义良好的API，同时也要考虑可重用性。 组件不仅能够支持当前的数据类型，同时也能支持未来的数据类型，这在创建大型系统时为你提供了十分灵活的功能。     

在像C#和Java这样的语言中，可以使用`泛型`来创建可重用的组件，一个组件可以支持多种类型的数据。 这样用户就可以以自己的数据类型来使用组件。     

#### 泛型之Hello World

下面来创建第一个使用泛型的例子：echo函数。 这个函数会返回任何传入它的值。       

不用泛型的话，这个函数可能是下面这样：              

<!--sec data-title="Dart" data-id="section1" data-show=true ces-->
```dart
int echoInt(int arg) {
  return arg;
}

echo(arg) {
  return arg;
}

main(List<String> args) {
  // 只能打印整数型
  print(echoInt(123));

  // 可打印任何类型
  print(echo('123'));
}
```
<!--endsec-->

<!--sec data-title="TypeScript" data-id="section2" data-show=true data-collapse=false ces-->
```javascript
function echoInt(arg: number): number {
  return arg
}

function echo(arg: any): any {
  return arg
}

// 只能打印整数型
console.log(echoInt(123))

// 可打印任何类型
console.log(echo('123'))
```
<!--endsec-->

使用`dynamic`类型会导致这个函数可以接收任何类型的arg参数，这样就丢失一些信息：传入的类型与返回的类型应该是相同的。如果我们传入一个数字，我们只知道任何类型的值都有可能被返回。     

因此，我们需要一种方法使返回值的类型与传入参数的类型是相同的。 这里，我们使用了`类型变量`，它是一种特殊的变量，只用于表示类型而不是值。         

<!--sec data-title="Dart" data-id="section3" data-show=true ces-->
```dart
T echo<T>(T arg) {
  return arg;
}
```
<!--endsec-->

<!--sec data-title="TypeScript" data-id="section4" data-show=true data-collapse=false ces-->
```javascript
function echo<T>(arg: T): T {
  return arg
}
```
<!--endsec-->

我们给echo添加了类型变量T。 T帮助我们捕获用户传入的类型（比如：int），之后我们就可以使用这个类型。 之后我们再次使用了 T当做返回值类型。现在我们可以知道参数类型与返回值类型是相同的了。 这允许我们跟踪函数里使用的类型的信息。      

我们把这个版本的echo函数叫做泛型，因为它可以适用于多个类型。 不同于使用 dynamic，它不会丢失信息，像第一个例子那像保持准确性，传入数值类型并返回数值类型。        

我们定义了泛型函数后，可以用两种方法使用。 第一种是，传入所有的参数，包含类型参数：       

```dart
echo<String>('123')
```

这里我们明确的指定了T是String类型，并做为一个参数传给函数，使用了<>括起来而不是()。    

第二种方法更普遍。利用了类型推论 -- 即编译器会根据传入的参数自动地帮助我们确定T的类型：       

```dart
echo('123')
```

注意我们没必要使用尖括号（<>）来明确地传入类型；编译器可以查看arg的值，然后把T设置为它的类型。 类型推论帮助我们保持代码精简和高可读性。如果编译器不能够自动地推断出类型的话，只能像上面那样明确的传入T的类型，在一些复杂的情况下，这是可能出现的。         

#### 使用泛型变量

使用泛型创建像echo这样的泛型函数时，编译器要求你在函数体必须正确的使用这个通用的类型。 换句话说，你必须把这些参数当做是任意或所有类型。      

如果我们想同时打印出arg的长度。 我们很可能会这样做：       

```dart
T echo<T>(T arg) {
  print(arg.length);  // The getter 'length' isn't defined for the class 'Object'.
  return arg;
}
```

如果这么做，编译器会报错说我们使用了arg的.length属性，但是没有地方指明arg具有这个属性。 记住，这些类型变量代表的是任意类型，所以使用这个函数的人可能传入的是个数字，而数字是没有 .length属性的。        

现在假设我们想操作T类型的数组而不直接是T。由于我们操作的是数组，所以.length属性是应该存在的。 我们可以像创建其它数组一样创建这个数组：         

<!--sec data-title="Dart" data-id="section5" data-show=true ces-->
```dart
List<T> loggingIdentity<T>(List<T> arg) {
  print(arg.length);
  return arg;
}

main(List<String> args) {
  List lists = [];
  lists..add(1)..add('2');
  loggingIdentity(lists); // 2
}
```
<!--endsec-->

<!--sec data-title="TypeScript" data-id="section6" data-show=true data-collapse=false ces-->
```javascript
function loggingIdentity<T>(arg: Array<T>): Array<T> {
  console.log(arg.length)
  return arg
}

const lists = []
lists.push(1)
lists.push('2')
loggingIdentity(lists)  // 2
```
<!--endsec-->

你可以这样理解loggingIdentity的类型：泛型函数loggingIdentity，接收类型参数T和参数arg，它是个元素类型是T的数组，并返回元素类型是T的数组。 如果我们传入数字数组，将返回一个数字数组。      

#### 泛型类

泛型类使用（ <>）括起泛型类型，跟在类名后面。     

<!--sec data-title="Dart" data-id="section7" data-show=true ces-->
```dart
typedef Add<T> = T Function(T x, T y);

class GenericNumber<T> {
  T zeroValue;
  Add<T> add; // dart2开始支持 函数类型 语法特性
}

main(List<String> args) {
  var myGenericNumber = new GenericNumber<int>();
  myGenericNumber.zeroValue = 0;
  myGenericNumber.add = (int x, int y) => x + y;
  print(myGenericNumber.add(myGenericNumber.zeroValue, 3)); // 3
}
```
<!--endsec-->

<!--sec data-title="TypeScript" data-id="section8" data-show=true data-collapse=false ces-->
```javascript
class GenericNumber<T> {
  zeroValue: T
  add: (x: T, y: T) => T
}

var myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0
myGenericNumber.add = (x: number, y: number) => x + y
console.log(myGenericNumber.add(myGenericNumber.zeroValue, 3))  // 3
```
<!--endsec-->

GenericNumber类的使用是十分直观的，并且你可能已经注意到了，没有什么去限制它只能使用int类型。 也可以使用字符串或其它更复杂的类型。         

<!--sec data-title="Dart" data-id="section9" data-show=true ces-->
```dart
main(List<String> args) {
  var stringNumeric = new GenericNumber<String>();
  stringNumeric.zeroValue = '0';
  stringNumeric.add = (String x, String y) => x + y;
  print(stringNumeric.add(stringNumeric.zeroValue, '3')); // 03
}
```
<!--endsec-->

<!--sec data-title="TypeScript" data-id="section10" data-show=true data-collapse=false ces-->
```javascript
var stringNumeric = new GenericNumber<String>();
stringNumeric.zeroValue = '0'
stringNumeric.add = (x: String, y: String) => `${x}${y}`
console.log(stringNumeric.add(stringNumeric.zeroValue, '3'))  // 03
```
<!--endsec-->

注：类有两部分：静态部分和实例部分。 泛型类指的是实例部分的类型，所以类的静态属性不能使用这个泛型类型。        

#### 泛型约束

你应该会记得之前的一个例子，我们有时候想操作某类型的一组值，并且我们知道这组值具有什么样的属性。 在 loggingIdentity例子中，我们想访问arg的length属性，但是编译器并不能证明每种类型都有length属性，所以就报错了。       

相比于操作dynamic所有类型，我们想要限制函数去处理任意带有.length属性的所有类型。 只要传入的类型有这个属性，我们就允许，就是说至少包含这一属性。 为此，我们需要列出对于T的约束要求。         

为此，我们定义一个接口来描述约束条件。 创建一个包含 .length属性的接口，使用这个接口和extends关键字来实现约束：      

<!--sec data-title="Dart" data-id="section11" data-show=true ces-->
```dart
abstract class Lengthwise {
  int length;
}

class LengthwiseObj extends Lengthwise {}

T loggingIdentityExtend<T extends Lengthwise>(T arg) {
  print(arg.length);
  return arg;
}

main() {
  loggingIdentityExtend(new LengthwiseObj()..length = 5); // 5
}
```
<!--endsec-->

<!--sec data-title="TypeScript" data-id="section12" data-show=true data-collapse=false ces-->
```javascript
abstract class Lengthwise {
  length: number;
}

class LengthwiseObj extends Lengthwise {}

function loggingIdentityExtend<T extends Lengthwise>(arg: T): T {
  console.log(arg.length)
  return arg
}

const lengthwiseObj = new LengthwiseObj()
lengthwiseObj.length = 5
loggingIdentityExtend(lengthwiseObj)  // 5
// TS同时还支持字面量相似规则
loggingIdentityExtend({length: 5, value: 3})  // 5
loggingIdentityExtend("12345")  // 5
loggingIdentityExtend([1, 2, 3, 4, 5])  // 5
```
<!--endsec-->

现在这个泛型函数被定义了约束，因此它不再是适用于任意类型。     

> 在Dart中，extends识别类型；在TS中，extends则识别字面量，即我们需要传入符合约束类型的值，必须包含必须的属性。从这点设计上来说，TS的思想更加先进点。   
