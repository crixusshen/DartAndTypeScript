# 单例构造函数

单例模式比较简单，它保证一个类只能有一个实例，并且提供一个全局的访问入口。采用单例模式的类应尽量保证无法被实例化，否则就缺失了单例的实际意义，因此开发者在定义单例类时不要去实现默认的无名构造函数：     

<!--sec data-title="Dart" data-id="section1" data-show=true ces-->
```dart
class Singleon {
  Singleon._();
 
  static Singleon _instance;
 
  static Singleon getInstance() {
    if (_instance == null) {
      _instance = Singleon._();
    }
    return _instance;
  }
}

main(List<String> args) {
  // var singleonInstance = new Singleon(); // The class 'Singleon' doesn't have a default constructor.
  var singleonInstance = Singleon.getInstance();
  var singleonInstance2 = Singleon.getInstance();
  print(singleonInstance == singleonInstance2); // true
}
```
<!--endsec-->

<!--sec data-title="TypeScript" data-id="section2" data-show=true data-collapse=false ces-->
```javascript
class Singleon {
  private constructor() {}

  private static _instance

  static getInstance(): Singleon {
    if (this._instance == null) {
      this._instance = new Singleon()
    }
    return this._instance
  }
}

// const singleonInstance = new Singleon()  // 类“Singleon”的构造函数是私有的，仅可在类声明中访问。
const singleonInstance = Singleon.getInstance()
const singleonInstance2 = Singleon.getInstance()
console.log(singleonInstance == singleonInstance2)  // true
```
<!--endsec-->