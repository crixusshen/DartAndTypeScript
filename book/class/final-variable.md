# final变量

Dart的变量可以使用单词final作为前缀，表示它们在初始化之后就不允许再修改。final字段有getter但是没有setter。final类变量必须在声明时就进行初始化。   

final实例变量必须在任何实例方法运行前进行初始化。实现这一点有几种方法。第一种是在声明变量时就进行初始化，例如：   

<!--sec data-title="Dart" data-id="section1" data-show=true ces-->
```dart
final originPoint = new Point(0, 0);
```
<!--endsec-->

<!--sec data-title="TypeScript" data-id="section2" data-show=true data-collapse=false ces-->
```javascript
const originPoint = new Point(0, 0)
```
<!--endsec-->

这种方式不一定总是很方便。在不同的构造函数中，设置这个变量的方式可能不一样。例如，这个变量可能取决于构造函数的参数。如果想把final实例变量设置为构造函数参数的值，则可以使用普通的构造函数简写。作为例子，考虑下面这个Point类，它标识不可变的点：    

<!--sec data-title="Dart" data-id="section3" data-show=true ces-->
```dart
class Point {
  final x, y;
  Point(this.x, this.y);
  // Point类的剩余代码 ...
}

final originPoint = new Point(0, 0);

main(List<String> args) {
  // originPoint = new Point(0, 0); // 'originPoint', a final variable, can only be set once.
}
```
<!--endsec-->

<!--sec data-title="TypeScript" data-id="section4" data-show=true data-collapse=false ces-->
```javascript
class Point {
  readonly _x
  readonly _y
  constructor(x, y) {
    this._x = x
    this._y = y
  }
  // Point类的剩余代码 ...
}

const originPoint = new Point(0, 0)

// originPoint = new Point(0, 0) // Cannot assign to 'originPoint' because it is a constant.
```
<!--endsec-->

不过某些情况下这还是不够。变量的值可能会取决于构造函数的参数，但又不完全相同，也就是说它们的值是基于构造函数参数计算得来的。   
试图给一个final实例变量赋值通常会导致一个名为NoSuchMethodError错误，因为赋值操作只是调用setter的语法糖，而final实例变量所对应的setter方法是没有定义的。单独声明一个对应的setter是可行的，它也会被调用。然而这对实例变量的值没有任何影响，在final变量初始化之后，它的值就无法改变了。   

大部分实例变量在声明时就被赋值并不再改变。因此大部分实例变量最好都声明为final。   
