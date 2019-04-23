# 私有

库是Dart的基础封装单元。以下划线（_）开头的成员都是库私有的。在同一个File中可访问私有变量，但是在不同的File中则连编译都不能通过，类似TS中的private访问修饰符作用。     

这种方案使开发者、编译器或其他工具不必查看某个变量的声明就可以识别到它是否私有。在库的封装中，私有的定义非常重要，往往它可以用来保护我们的变量不被外界篡改。     

<!--sec data-title="Dart" data-id="section1" data-show=true ces-->
```dart
// library/private/1.dart:
class Bicycle {
  Bicycle(this.cadence, this.gear);
  int cadence;
  int _speed = 0;
  int gear;
}
class Test{
  void main() {
    final bike = Bicycle(2, 1);
    print(bike._speed);
  }
}
```

```dart
// library/private/2.dart:
import '1.dart';

void main() {
  final bike = Bicycle(2, 1);
  // print(bike._speed); // 编译报错
}
```
<!--endsec-->

<!--sec data-title="TypeScript" data-id="section2" data-show=true data-collapse=false ces-->
```javascript
// library/private/1.ts:
class Bicycle {
  constructor(public cadence: number, public gear: number){}
  private readonly speed = 0
}

class Test {
  main(): void {
    const bike = new Bicycle(2, 1)
    // console.log(bike.speed) // 属性“speed”为私有属性，只能在类“Bicycle”中访问
  }
}

export default Bicycle
```

```javascript
// library/private/2.ts:
import Bicycle from './1'

const bike = new Bicycle(2, 1)
// console.log(bike.speed);  // 属性“speed”为私有属性，只能在类“Bicycle”中访问。
```
<!--endsec-->

> 区别：私有作用域在Dart中指库内部，而在TS中则指类内部。这一点需要加以区分。      
