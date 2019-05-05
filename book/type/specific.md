# 类型具体化

每个类型声明都会引入一个代表它自身的类型为Type的编译时常量对象。这些对象在运行时也是可见的。同样，通过动态类型检查和强制类型转换也可以检查对象是否为某个类型的成员。      

### 类型检查

类型检查是用来测试对象是否属于某个类型的表达式：    

<!--sec data-title="Dart" data-id="section1" data-show=true ces-->
```dart
main(List<String> args) {
  var v = [1, 2, 3];
  print(v is List); // true
  print(v is Map);  // false
  print(v is Object); // true
}
```
<!--endsec-->

<!--sec data-title="TypeScript" data-id="section2" data-show=true data-collapse=false ces-->
```javascript
const isList = (props: any): props is [] => typeof (props as [])['concat'] !== 'undefined'
const mapInstance = new Map()
const objectInstance = {}

var v = [1, 2, 3]
console.log(isList(v))  // true
console.log(isList(mapInstance))  // false
console.log(isList(objectInstance))  // false
```
<!--endsec-->

类型检查的一般形式是e is T，其中e是一个表达式而T是一个类型。类型检查会对e求值并将结果的动态类型与类型T做对比测试。上述代码的最后一行是永远不能出现在Dart程序中的，它的值始终是true，因为Dart中所有的值都是对象。     

### 强制类型转换

强制类型转换同样是对一个表达式求值并测试结果是否属于某个类型，不同的是，它们的结果并不明确。相反，如果测试失败，则强制类型转换会抛出一个CastError，否则它将返回未改动的被检查的对象。      

<!--sec data-title="Dart" data-id="section3" data-show=true ces-->
```dart
main() {
  Object o = [3, 4, 5];
  print(o as List); // [3, 4, 5]
  print(o as Map);  // Unhandled exception
}
```
<!--endsec-->

<!--sec data-title="TypeScript" data-id="section4" data-show=true data-collapse=false ces-->
```javascript
// 在ts中也叫类型断言，有2种语法写法
// 写法1：
let o = [3, 4, 5]
console.log(<Array<number>>o) // [3, 4, 5]
console.log(<Map<number, number>>o) // 编译时通不过
// 写法2，即dart的写法：
console.log(o as Array<number>) // [3, 4, 5]
console.log(o as Map<number, number>) // 编译时通不过
```
<!--endsec-->

强制类型转换大致上可以看做以下方式的简写：      

```dart
var t = e;
e is T ? t : throw new CastError();
```

强制类型转换的典型用法是数据检查。但是我们也不应该滥用，因为它是在运行时执行的（TS则不是），因此会带来一定的运行时消耗。          

```dart
Object o = [5, 6, 7];
// ......大量的中间逻辑
(o as List).length; // 这会存在一定的性能损耗
```

如果你的目的只是让类型检查器可以不发出警告或报错，那么只需要一个赋值语句即可：       

```dart
Object o = [5, 6, 7];
// ......大量的中间逻辑
List o_as_list = o;
o_as_list.length; // 这样是最优处理，进行一次隐式的装箱操作，性能更优
```

### 装箱拆箱

在每次的参数传递中，函数或方法返回结果以赋值操作时，Dart都会自动执行一次动态类型检查。这种模式可以确保赋给变量的动态值是变量的静态类型的成员。同样，实际参数的动态类型也会与形式参数的静态类型进行对比检查，而函数结果的动态类型则会与函数声明的返回类型进行对比检查。      

```dart
main() {
  num n = 3.0;
  // int i = n;  // 报错
  double i = n;
  num x = i;
  int j = null;
}
```

可以看出，赋值操作中的值的真实类型必须是变量的静态类型的子类，或者是null。即上面示例中，i的真实类型double是x的静态类型num的子类，因此成立。同样示例也展示了null可以赋值给j。         

类型转换不仅繁琐，还会引入运行时开销，在生产环境下全面使用类型转换的代价是很高的，所以只有真正需要的时候我们才去合理使用类型转换。        
