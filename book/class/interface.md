# 接口

每个类都隐含的定义了一个接口，此接口描述了类的实例拥有哪些方法。很多编程语言都有正式的接口声明，但在Dart中没有接口。笔者也觉得接口的设计确实属于很尴尬的设计，因为我们完全可以使用一个抽象类来实现我们的需求。    

与C#、TypeScript里接口的基本作用一样：    

<!--sec data-title="Dart" data-id="section1" data-show=true ces-->
```dart
abstract class ClockInterface {
  var currentTime;
  void setTime(DateTime d);
}

class Clock implements ClockInterface {
  @override
  var currentTime;

  @override
  void setTime(DateTime d) {
    this.currentTime = d;
  }
}

main(List<String> args) {
  var clock = Clock();
  print(clock is ClockInterface);
}
```
<!--endsec-->

<!--sec data-title="TypeScript" data-id="section2" data-show=true data-collapse=false ces-->
```javascript
interface ClockInterface {
  currentTime: Date
  setTime(d: Date)
}

class Clock implements ClockInterface {
  currentTime: Date
  
  setTime(d: Date) {
    this.currentTime = d
  }
}

const instanceOfClock = (props: any): props is ClockInterface => typeof (props as ClockInterface)['currentTime'] !== 'undefined'
var clock = new Clock()
console.log(instanceOfClock(clock))
```
<!--endsec-->

请注意，is不检查对象是否为某个类或其子类的实例。相反，is检查对象的类是否明确的实现了某个接口，它可以用来判断类是否属于某种类类型。由于TS中不存在is关键词或者类似is的功能，有经验的工程师会问不是有一个instanceOf吗？由于instanceOf确实也是用来在运行时判断某个对象是否是特定类的一个实例，而interface在运行时时是不存在的，所以笔者采用了变通的方式来实现Dart中is的效果。    

一个类可以implements多个接口，这点也需要注意。在我们实际开发过程中，interface的运用要比上面的代码复杂的多。       

### 接口的继承

接口的继承类似于类。通俗的说，这可以让我们从一个接口里面复制成员到另一个接口里，可以更加灵活的将接口分割到可重用的模块内：    

<!--sec data-title="Dart" data-id="section3" data-show=true ces-->
```dart
abstract class Shape {  // 形状
  String color;
}

abstract class Square extends Shape { // 正方形
  int sideLength;
}

class Rhombus implements Square { // 菱形
  @override
  String color;

  @override
  int sideLength;
}

main(List<String> args) {
  var rhombus = Rhombus();
  rhombus.color = 'red';
  rhombus.sideLength = 10;
}
```
<!--endsec-->

<!--sec data-title="TypeScript" data-id="section4" data-show=true data-collapse=false ces-->
```javascript
interface Shape {
  color: string
}

interface Square extends Shape {
  sideLength: number
}

let rhombus = <Square>{}
rhombus.color = 'red'
rhombus.sideLength = 10
```
<!--endsec-->

一个接口也可以继承多个接口，创建出多个接口的合成接口。可以看出implements的目的是在接口之间建立预期的关联，而不是共享实现。所以以上Rhombus类不是Square的子类，它没有继承Square的任何成员。        
