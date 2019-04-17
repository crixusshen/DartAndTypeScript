# 相等操作符

所有对象都支持相等操作符`==`。这个操作符是在Object类中定义的，因此所有的类都继承了它，所以所有对象实例的行为都会包含它。先来看看下面这段代码：   

<!--sec data-title="Dart" data-id="section1" data-show=true ces-->
```dart
class Newer {
  final x, y;
  Newer(this.x, this.y);
}

main(List<String> args) {
  var aNewer = new Newer(3, 4);
  var anotherNewer = new Newer(3, 4);
  print(aNewer == anotherNewer);  // false
}
```
<!--endsec-->

<!--sec data-title="TypeScript" data-id="section2" data-show=true data-collapse=false ces-->
```javascript
class Newer {
  readonly _x;
  readonly _y;
  constructor(x, y) {
    this._x = x;
    this._y = y;
  }
}

const aNewer = new Newer(3, 4)
const anotherNewer = new Newer(3, 4)
console.log(aNewer == anotherNewer)  // false
```
<!--endsec-->

这里其实存在一个基础概念问题，虽然在代码中aNewer和anotherNewer具有相同的x值和y值，换句话说两个对象可以是同一个类的实例，并且具有相同的状态和行为，但是它们仍然是不相同的。首先类对象是一个引用类型，引用类型和我们平时使用的基础类型（如int，string）不是一个概念,基础类型的变量存放在内存的栈内存区内，准确的来说是栈区内包含了变量的标识符和变量的值。但是引用类型就不同，引用类型的值是同时存储在栈内存区和堆内存区中的对象，更准确的说，引用类型的存储需要内存的栈区和堆区共同来完成，栈区内存保存变量标识符和指向堆区内存中的该对象的指针地址，也可以说是该对象在堆内存区内的地址。所以引用类型的比较其实是在比较两个对象在栈区中存储的堆内存地址。因此该代码的比较会返回false。    

其实笔者在这里主要解释了下强类型语言，例如C#中引用类型的概念，虽然在前端很少会听见引用类型这样的解释，但是并不代表它不存在，像JavaScript这样的语言同样存在引用类型概念，而且它们都是一样的解释，那么如何解决实例对象比较的问题呢？前面说过`==`是Object类的基础行为，所有实例都包含这个操作符，下面我们可以通过重写这个操作符来实现实例比较的问题：     

<!--sec data-title="Dart" data-id="section3" data-show=true ces-->
```dart
class Newer {
  final x, y;
  Newer(this.x, this.y);

  operator == (N) => this.x == N.x && this.y == N.y;
}

main(List<String> args) {
  var aNewer = new Newer(3, 4);
  var anotherNewer = new Newer(3, 4);
  print(aNewer == anotherNewer);  // true，如果把`operator == (N) ...`这段代码注释则返回false
}
```
<!--endsec-->

<!--sec data-title="TypeScript" data-id="section4" data-show=true data-collapse=false ces-->
```javascript
class Newer {
  readonly _x;
  readonly _y;
  constructor(x, y) {
    this._x = x;
    this._y = y;
  }

  public equals(obj: Newer) {
    return this._x == obj._x && this._y == obj._y
  }
}

const aNewer = new Newer(3, 4)
const anotherNewer = new Newer(3, 4)
console.log(aNewer == anotherNewer)  // false
console.log(aNewer.equals(anotherNewer))  // true
```
<!--endsec-->

ts中由于并没有操作符概念，因此我们可以模仿C#来实现每一个基准类中的equals函数来实现同样的效果，当然在Dart中还存在一个identical()方法，它可以用来检查两个对象是否相同，它是比较hashCode的一种实现，这在C#中非常常见。    
