# 构造函数

每个类至少有一个构造函数，构造函数的名称总是从我们想创建实例的类名开始的。构造函数可以由开发者明确地声明，或者也可以隐含地产生。在没有明确的构造函数被声明时，隐含的构造函数将被创建，它没有参数和函数体。     

声明一个和类名相同的函数（无名构造函数），来作为类的构造函数，注意一个类只能声明一个。            

<!--sec data-title="Dart" data-id="section1" data-show=true ces-->
```dart
class PointConstructor {
  num x;
  num y;

  PointConstructor(num x, num y) {
    this.x = x;
    this.y = y;
  }
}
```
<!--endsec-->

<!--sec data-title="TypeScript" data-id="section2" data-show=true data-collapse=false ces-->
```javascript
class PointConstructor {
  x: number
  y: number

  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }
}
```
<!--endsec-->

this关键字指向了当前类的实例，上面的代码可以简化为：     

<!--sec data-title="Dart" data-id="section3" data-show=true ces-->
```dart
class PointConstructor {
  num x;
  num y;

  PointConstructor(this.x, this.y);
}
```
<!--endsec-->

<!--sec data-title="TypeScript" data-id="section4" data-show=true data-collapse=false ces-->
```javascript
class PointConstructor {
  constructor(public x: number, public y: number) {}
}
```
<!--endsec-->

虽然是简写，但是它还是存在一定的差别。简写方式下针对x和y的赋值是发生在构造函数执行前的，所以如果成员变量是final，简写的意义就体现出来了。     

##### 命名构造函数

Dart中没有重载，且只能声明一个无名构造函数，因此可以使用命名构造函数从另一个类或现有的数据中快速实现构造函数。而同样，在TypeScript中我们完全可以使用构造函数重载的模式来实现同样的功能。但是比较下来开发者会发现在实现中Dart由于是分隔开来实现的，而TS需要通过参数类型来区分不同的逻辑，从中可以看出Dart放弃了构造函数重载特性，通过命名构造函数的解决方案使代码看起来逻辑更加明确。        

> 重载：可通过传入不同的类型和个数的参数来返回不同类型的实例

<!--sec data-title="Dart" data-id="section5" data-show=true ces-->
```dart
class PointConstructor {
  num x;
  num y;

  PointConstructor(this.x, this.y);

  PointConstructor.fromJson(Map json) {
    x = json['x'];
    y = json['y'];
  }
}

main(List<String> args) {
  var defaultPoint = new PointConstructor(3, 4);
  print('x: ${defaultPoint.x} y: ${defaultPoint.y}'); // x: 3 y: 4

  Map<String, num> map = Map();
  map['x'] = 7;
  map['y'] = 8;
  var fromJsonPoint = new PointConstructor.fromJson(map);
  print('x: ${fromJsonPoint.x} y: ${fromJsonPoint.y}'); // x: 7 y: 8
}
```
<!--endsec-->

<!--sec data-title="TypeScript" data-id="section6" data-show=true data-collapse=false ces-->
```javascript
class PointConstructor {
  x: number
  y: number

  constructor(x: number, y: number)
  constructor(json: Map<string, number>)
  constructor(x?, y?) {
    if(typeof x === 'number') {
      this.x = x
      this.y = y
    }
    else if(typeof x === 'object') {
      this.x = x.get('x')
      this.y = x.get('y')
    }
  }
}

var defaultPoint = new PointConstructor(3, 4)
console.log(`x: ${defaultPoint.x} y: ${defaultPoint.y}`)  // x: 3 y: 4

const map = new Map()
map.set('x', 7)
map.set('y', 8)
var fromJsonPoint = new PointConstructor(map);
console.log(`x: ${fromJsonPoint.x} y: ${fromJsonPoint.y}`); // x: 7 y: 8

```
<!--endsec-->

##### 构造函数不能继承

Dart语言中，子类不会继承父类的命名构造函数，这和其他语言存在非常大的区别。如果不显式提供子类的构造函数，系统就会提供默认的构造函数，这个构造函数将会是没有参数没有实现的函数。    

##### 调用父类的非默认构造函数

默认情况下，子类只能调用父类的无名、无参数的构造函数；父类的无名构造函数会在子类的构造函数前调用；如果“初始化列表”也同时定义了，则会先执行“初始化列表”中的内容，然后再执行父类的无名无参数构造函数，最后调用子类自己的无名无参数构造函数。     

如果父类不显式提供无名无参数构造函数，在子类中必须手动调用父类的一个构造函数（默认如果父类有无名无参数构造函数，则会被自动调用）。这种情况下，调用父类的构造函数的代码放在子类构造函数名后，子类构造函数体前，中间使用`：`分割。    

为什么要这么来设计？这是因为如果不执行父类的构造函数，那么父类的局部变量将不会被正确的初始化，从而会导致遇到未初始化的内存。      

<!--sec data-title="Dart" data-id="section7" data-show=true ces-->
```dart
import "dart:math";
class PointConstructor {
  num x;
  num y;

  PointConstructor(this.x, this.y);

  PointConstructor.fromJson(Map json) {
    x = json['x'];
    y = json['y'];
  }
}

class Point3DConstructor extends PointConstructor {
  final rho, theta;
  Point3DConstructor(x, y): rho = sqrt(x * x + y * y), theta=atan(x/y), super(x, y);
}

main(List<String> args) {
  var point3D = new Point3DConstructor(1, 2);
  print('x: ${point3D.x} y: ${point3D.y} rho: ${point3D.rho} theta: ${point3D.theta}'); // x: 1 y: 2 rho: 2.23606797749979 theta: 0.46364760900080615
}
```
<!--endsec-->

<!--sec data-title="TypeScript" data-id="section8" data-show=true data-collapse=false ces-->
```javascript
class PointConstructor {
  x: number
  y: number

  constructor(x: number, y: number)
  constructor(json: Map<string, number>)
  constructor(x?, y?) {
    if(typeof x === 'number') {
      this.x = x
      this.y = y
    }
    else if(typeof x === 'object') {
      this.x = x.get('x')
      this.y = x.get('y')
    }
  }
}

class Point3DConstructor extends PointConstructor {
  readonly rho
  readonly theta
  constructor(x, y) {
    super(x, y)
    this.rho = Math.sqrt(x * x + y * y)
    this.theta = Math.atan(x/y)
  }
}

var point3D = new Point3DConstructor(1, 2);
console.log(`x: ${point3D.x} y: ${point3D.y} rho: ${point3D.rho} theta: ${point3D.theta}`); // x: 1 y: 2 rho: 2.23606797749979 theta: 0.4636476090008061

```
<!--endsec-->

以上两种写法方式虽然执行结果是一致的，但是它们在执行上的先后顺序完全是不一致的。在Dart中，首先通过“初始化列表”依次对rho和theta成员变量进行了赋值操作，随后通过父类无名构造函数对父类中的成员变量x和y做了赋值操作，最后执行子类本身的构造函数体，由于没有实现因此整个流程提前结束。而在TS中相对比较复杂点，因为子类的构造函数可以完全重写父类相同命名相同参数的构造函数，但是一旦这样就必须在子类中通过super关键词进行手动调用父类的构造函数，就像上面这个示例，首先调用了父类的构造函数，然后才执行子类的构造函数，最后才对rho和theta进行了赋值。虽然两者在语法层面区别很大，但是最终实现的效果却是一样的。     
