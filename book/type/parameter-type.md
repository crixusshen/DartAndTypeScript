# 形参类型

Dart的变量可以与类型关联，类型也可以用来指示方法的返回类型，例如：   

<!--sec data-title="Dart" data-id="section0" data-show=true ces-->
```dart
int sum(int a, int b) => a + b;
main(List<String> args) {
  print(sum(3, 4)); // 7
}
```
<!--endsec-->

<!--sec data-title="TypeScript" data-id="section1" data-show=true data-collapse=false ces-->
```javascript
const sum = (a: number, b: number): number => a + b;
console.log(sum(3, 4)) // 7
```
<!--endsec-->

当然我们也可以不使用类型来书写代码，下面是一段非常相似的代码，不同之处在于缺少类型注解：

<!--sec data-title="Dart" data-id="section2" data-show=true ces-->
```dart
sum(int a, int b) => a + b;
main(List<String> args) {
  print(sum(3, 4)); // 7
}
```
<!--endsec-->

<!--sec data-title="TypeScript" data-id="section3" data-show=true data-collapse=false ces-->
```javascript
const sum = (a: number, b: number) => a + b;
console.log(sum(3, 4)) // 7
```
<!--endsec-->  

这两个不同版本的行为是完全一致的，阅读代码的人能够受益于类型注解提供的文档，但Dart运行时对此并不关心。开发工具虽然可以通过不同的方式来利用类型注解：他们可以对可能存在的类型不一致发出警告，也可以通过多种方式帮助开发者。但是仅仅依靠类型检查就能够确保程序的准确性是不可能的，哪怕在非常严格类型检查的静态类型语言中同样存在下面的问题：   

<!--sec data-title="Dart" data-id="section4" data-show=true ces-->
```dart
int i;
int j = 0;
sum(a, b) => a + b;
main(List<String> args) {
  print(sum(i, j)); // NoSuchMethodError: The method '+' was called on null.
}
```
<!--endsec-->

<!--sec data-title="TypeScript" data-id="section5" data-show=true data-collapse=false ces-->
```javascript
let i: number
let j: number = 0
const sum = (a, b) => a + b
console.log(sum(i, j))  // NaN
```
<!--endsec--> 

上面这段代码不能运行，即使它有正确的类型。当然这种情况非常的普遍，如果我们仅仅依靠类型检查就能够确保程序的正确性，那么静态类型编程语言将拥有巨大的经济优势。虽然sum()没有被类型所注解，但是在某些定义了+方法的类型却是有意义的：   

<!--sec data-title="Dart" data-id="section6" data-show=true ces-->
```dart
sum(a, b) => a + b;
main(List<String> args) {
  print(sum('abc', 'defg')); // abcdefg
}
```
<!--endsec-->

<!--sec data-title="TypeScript" data-id="section7" data-show=true data-collapse=false ces-->
```javascript
const sum = (a, b) => a + b
console.log(sum('abc', 'defg')) // abcdefg
```
<!--endsec--> 

在这种情况下，为了可以避免过分的类型警告，最好的做法就是完全避免给sum()添加类型注解。