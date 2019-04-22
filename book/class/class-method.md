# 类方法

类方法是不依赖于个体实例的方法。在讨论类变量时我们已经遇到了一些类方法。        

<!--sec data-title="Dart" data-id="section1" data-show=true ces-->
```dart
import 'dart:math';
class PointClassMethod {
  var rho, theta;
  PointClassMethod(this.rho, this.theta);
  x() => rho * cos(theta);
  y() => rho * sin(theta);
  static distance(p1, p2) {
    var dx = p1.x() - p2.x();
    var dy = p1.y() - p2.y();
    return sqrt(dx * dx + dy * dy);
  }
}

main(List<String> args) {
  var aPoint = PointClassMethod(3, 30);
  var anotherPoint = PointClassMethod(4, 30);
  var _distance = PointClassMethod.distance(aPoint, anotherPoint);
  print(_distance); // 0.9999999999999999
}
```
<!--endsec-->

<!--sec data-title="TypeScript" data-id="section2" data-show=true data-collapse=false ces-->
```javascript
class PointClassMethod {
  constructor(public rho: number, public theta: number){}
  x() {
    return this.rho * Math.cos(this.theta)
  }
  y() {
    return this.rho * Math.sin(this.theta)
  }
  static distance(p1, p2) {
    const dx = p1.x() - p2.x()
    const dy = p1.y() - p2.y()
    return Math.sqrt(dx * dx + dy * dy)
  }
}

const aPoint = new PointClassMethod(3, 30);
const anotherPoint = new PointClassMethod(4, 30);
const _distance = PointClassMethod.distance(aPoint, anotherPoint);
console.log(_distance); // 0.9999999999999999
```
<!--endsec-->

用户定义的类方法在声明它们的类中是可用的，在类外只能将它们所在的类作为前缀才能访问，例如PointClassMethod.distance(aPoint, anotherPoint)。    

在类方法中使用this将导致编译错误。因为一个类方法不特定于任意实例，所以this在其内部是未定义的。     

> 最后有一点需要牢记，类变量和类方法从不被继承。      
