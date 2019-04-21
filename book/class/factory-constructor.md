# 工厂构造函数

当你需要一些类的实例，但是想以更加灵活一点的方式，而不是直接用硬编码的方式调用具体类型的构造函数的话，这时工厂模式就可以发挥作用。如果你已经有了一个实例也许回想返回之前已经缓存的实例，或许也许你想返回一个不同类型的对象。     

Dart支持这种模式，但不要求你改变创建对象时的样子。而是让你定义一个工厂构造函数。当你调用它的时候看起来像一个普通的构造函数。它没有初始化列表或初始化形式参数，它必须有一个返回一个对象（实例）的函数体，且工厂构造函数中不能使用this。例如：      

<!--sec data-title="Dart" data-id="section1" data-show=true ces-->
```dart
class Logger {
  final String name;
  static final Map<String, Logger> _cache = <String, Logger>{};

  factory Logger(String name) {
    if (_cache.containsKey(name)) {
      return _cache[name];
    } else {
      final logger = new Logger._internal(name);
      _cache[name] = logger;
      return logger;
    }
  }

  Logger._internal(this.name);
}

main(List<String> args) {
  var logger1 = new Logger('smsLogger');
  var logger2 = new Logger('smsLogger');
  print(logger1 == logger2);  // true

  var logger3 = new Logger('mobiLogger');
  print(logger1 == logger3);  // false
}
```
<!--endsec-->

<!--sec data-title="TypeScript" data-id="section2" data-show=true data-collapse=false ces-->
```javascript
class Logger {
  static readonly _cache: Map<string, Logger> = new Map();

  static getInstance(name: string) {
    if (this._cache.has(name)) {
      return this._cache.get(name)
    } else {
      const logger = new Logger(name)
      this._cache.set(name, logger)
      return logger
    }
  }

  constructor(public name: string){}
}

const logger1 = Logger.getInstance('smsLogger')
const logger2 = Logger.getInstance('smsLogger')
console.log(logger1 == logger2);  // true

const logger3 = Logger.getInstance('mobiLogger')
console.log(logger1 == logger3);  // false
```
<!--endsec-->

这里需要开发者注意一点，这里讨论的都是工厂构造函数概念，即只有Dart语法具有该特性。而不是工厂设计模式，请不要搞混。在TS中实现类似Dart的工厂构造函数，完全采用了硬编码的方式来实现，它并不能直接通过构造函数来创建不同的实例，只能通过定义静态函数的方式来实现类似的功能，虽然代码量看上去是差不多，但是从思想角度来说Dart表现的更为先进，通过不同的构造函数来实现不同的功效，因为大多数开发者并不知道类中的getInstance被设计为了一个缓存实例的工厂效果。     
