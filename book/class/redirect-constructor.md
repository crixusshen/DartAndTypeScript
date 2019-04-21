# 重定向构造函数

有时在逻辑处理过程中，我们想把执行重定向到另一个构造函数，但是又想保留旧的构造函数。可能这个类已经被一些陈旧的系统调用过，为了不破坏类本身的结构，可以通过重定向构造函数的方式来实现。     

现在我们有一个PointRedirect类，我们想通过两种模式来创建这个类对象，一种是通过极坐标的方式，而另一种则是通过传入直接坐标将其转化为极坐标的方式，请看下面的具体实现：    

<!--sec data-title="Dart" data-id="section1" data-show=true ces-->
```dart
import "dart:math";
class PointRedirect {
  var rho, theta;
  PointRedirect.polar(this.rho, this.theta);
  PointRedirect(a, b): this.polar(sqrt(a * a + b * b), atan(a/b));
}

main(List<String> args) {
  var point1 = new PointRedirect(1, 2);
  print('rho: ${point1.rho} theta: ${point1.theta}'); // rho: 2.23606797749979 theta: 0.46364760900080615

  var point2 = new PointRedirect.polar(1, 2);
  print('rho: ${point2.rho} theta: ${point2.theta}'); // rho: 1 theta: 2
}
```
<!--endsec-->

<!--sec data-title="TypeScript" data-id="section2" data-show=true data-collapse=false ces-->
```javascript
class PointRedirect {
  rho: number
  theta: number

  constructor(rho: number, theta: number)
  constructor(json: Map<string, number>)
  constructor(x?, y?) {
    if(typeof x === 'number') {
      this.rho = x
      this.theta = y
    }
    else if(typeof x === 'object') {
      const a = x.get('a')
      const b = x.get('b')
      this.rho = Math.sqrt(a * a + b * b)
      this.theta = Math.atan(a/b)
    }
  }
}

var point1 = new PointRedirect(1, 2)
console.log(`rho: ${point1.rho} theta: ${point1.theta}`)  // rho: 1 theta: 2

const _map = new Map()
_map.set('a', 7)
_map.set('b', 8)
var point2 = new PointRedirect(_map)
console.log(`rho: ${point2.rho} theta: ${point2.theta}`)  // rho: 10.63014581273465 theta: 0.7188299996216245
```
<!--endsec-->

在Dart这块的实现中，PointRedirect()就是一个重定向构造函数，这让我们保留了类原有的API。我们使用一个命名构造函数PointRedirect.polar()来生成使用新表现方式的点，它使我们得以保留旧的构造函数。我们将旧的构造函数转换为重定向构造函数，使它为我们生产改变了表示方式的点。但是和TypeScript的实现相比，Dart在这块的设计就表现的比较优雅，这得益于命名构造函数的重定向的设计。TS中只能通过构造函数重载的方式来实现，但是这就意味着在调用不同构造函数的时候必须使用不同类型甚至是不同参数个数的形参，否则无法区分到底调用的是哪一个构造函数。因此TS的实现代码看上去就相对比较冗余，而且构造函数的实现体完全通过形参类型来判断，耦合性非常的强，如果哪一天参数类型发生了变化，这段逻辑实现也需要同步更新，否则就会发生异常。而Dart只需要增加不同的命名构造函数即可，相对这样的处理方式对我们的风险更低更安全，同时也不会破坏原有类的API和结构。         
