# 类变量

除了实例变量，类也可以定义类变量。一个类只有一份类变量的副本，无论它有多少个实例。即使类没有实例，类变量也是存在的。   

类变量的声明是在变量名前放置单词static。我们可以添加一个类变量来跟踪有多少个实例被创建。   

<!--sec data-title="Dart" data-id="section1" data-show=true ces-->
```dart
class Box {
  static var numberOfInstances = 0;
  Box() {
    ++numberOfInstances;
  }
}

main(List<String> args) {
  var box1 = new Box();
  var box2 = new Box();
  Box.numberOfInstances == 0 ? print('No boxes yet') : print('We have boxes!');
}
```
<!--endsec-->

<!--sec data-title="TypeScript" data-id="section2" data-show=true data-collapse=false ces-->
```javascript
class Box {
  static numberOfInstances = 0
  constructor() {
    ++Box.numberOfInstances
  }
}

var box1 = new Box()
var box2 = new Box()
Box.numberOfInstances == 0 ? console.log('No boxes yet') : console.log('We have boxes!')
```
<!--endsec-->

在这里，每当类构造函数Box()运行时，它就会增加已创建箱子的实例数量。   

像实例变量，类变量从不直接引用。所有对它们的访问都是通过存取器。   

在它的声明类中，类变量可以通过名称直接引用（注意ts中可不是这样的）。在类的外部，只能通过变量名前加上类名来访问。   

类变量通常也被成为“静态变量”，但“静态变量”这个术语也包括了类变量与顶层变量。为了避免混淆，我们还是使用“类变量”来称呼。经常也会用“字段”这个术语来统称实例和类变量。   

类变量是延迟初始化的，在getter第一次被调用时类变量才执行初始化，即第一次尝试读取它时。与其他变量一样，如果一个类变量没有被初始化，则它会被默认初始化为null。   

类变量的延迟初始化有助于避免一个典型的问题：过量的前期初始化导致应用程序启动缓慢。然而延迟初始化也会导致出乎意料的行为。假设一个类变量在被赋值之前就被读取，就像下面的例子（例子中使用的是顶层变量而非类变量，但他们的行为是一致的）：   

<!--sec data-title="Dart" data-id="section3" data-show=true ces-->
```dart
class Cat {}
class DeadCat extends Cat {}
class LiveCat extends Cat {
  LiveCat() {
    print("I'm alive!");
  }
}
Cat schrodingers = new LiveCat();

main(List<String> args) {
  schrodingers = new DeadCat();
}
```
<!--endsec-->

<!--sec data-title="TypeScript" data-id="section4" data-show=true data-collapse=false ces-->
```javascript
class Cat {}
class DeadCat extends Cat {}
class LiveCat extends Cat {
  constructor() {
    super()
    console.log("I'm alive!")
  }
}
// ts中没有顶层变量的说法，因此这里会被执行
var schrodingers = new LiveCat()
schrodingers = new DeadCat();
```
<!--endsec-->

上面的ts例子中，由于ts中并没有顶层变量，因此它会被执行，但是它们的语法是相近的。   

此处`schrodingers`的初始化永远不会被执行，并且对`print()`的调用也永远不会执行。而在我们实际开发中，开发者可能会检查`schrodingers`变量的值，那样就会触发变量的初始化。开发者应该始终密切关注延迟初始化带来的性能影响而适当的进行使用。   
