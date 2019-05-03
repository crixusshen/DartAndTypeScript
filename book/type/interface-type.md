# 接口类型

Dart并没有声明接口的语法。接口是通过类声明引入的。每个类都引入了一个隐形接口，其签名是基于类的成员。对于传统接口声明的要求，我们定义一个"纯抽象类"就可以轻松解决。   

任何类都可以实现一个接口，即使该接口与类完全没有关联。这是Dart不需要接口声明语法的原因。implements子句所做的，是使类与它所列出的接口建立明确的子类关系，这种关系会影响Dart类型检查器及运行时的行为。   

我们来看看下面这个类：   

<!--sec data-title="Dart" data-id="section0" data-show=true ces-->
```dart
abstract class Pair {
  get first;
  get second;
  plus();
}

class ArrayPair implements Pair {
  var _rep;
  ArrayPair(a, b) {
    _rep = [a, b];
  }
  get first => _rep[0];
  get second => _rep[1];
  plus() {
    return 'first: ${this.first}; sencond: ${this.second}';
  }
}

Pair reversePair(Pair p) => new ArrayPair(p.second, p.first);

main(List<String> args) {
  Pair _reversePair = reversePair(new ArrayPair(3, 4));
  print(_reversePair.plus());
}
```
<!--endsec-->

<!--sec data-title="TypeScript" data-id="section1" data-show=true data-collapse=false ces-->
```javascript
interface PairConstructor {
  new (p1, p2): Pair
}

interface Pair {
  first: any
  second: any
  plus(): string
}

class ArrayPair implements Pair {
  private _rep: Array<any>
  constructor(a, b) {
    this._rep = [a, b]
  }
  get first() {
    return this._rep[0]
  }
  get second() {
    return this._rep[1]
  }
  plus() {
    return `first: ${this.first}; sencond: ${this.second}`
  }
}

const reversePair = (p: PairConstructor, first, second) => new p(first, second)

const _reversePair = reversePair(ArrayPair, 3, 4)
console.log(_reversePair.plus())
```
<!--endsec-->

但是如果我们省略了implements子句，则类型检查器将不知道ArrayPair是Pair的子类型。在这种情况下，类型检查器会对reversePair()的定义及使用发出警告。类似的警告信息也会出现在方法的调用处，因为方法的实际参数的类型是ArrayPair，而形式参数的类型是Pair。   

implements子句中列出的每个接口都被认为是当前类的直接父接口（可赋值性）。在上面的例子中，Pair是ArrayPair的直接父接口。此外，类的父类（继承关系）也被认为是类的直接父接口之一。   

在值传递的过程中，类型检查器并不强制要求变量之间有父接口关系，它检查的是可赋值性。可赋值性比继承关系更为宽松。只要两个类型之间存在父子关系，Dart就认为它们可以互相赋值。也就是说，不仅ArrayPair可以赋值给Pair(因为ArrayPair是Pair的子类型)，Pair也可以赋值给ArrayPair。看看下面的例子：   

<!--sec data-title="Dart" data-id="section2" data-show=true ces-->
```dart
class Monster {
  // 大量的功能实现
}

class Vampire extends Monster {
  get bloodType => '0';
}

Map<String, Monster> monsters = {
  'Frankenstein': new Monster(),
  'Godzilla': new Monster(),
  'Dracula': new Vampire()
};

Vampire vamp = monsters['Dracula'];
```
<!--endsec-->

<!--sec data-title="TypeScript" data-id="section3" data-show=true ces-->
```javascript
class Monster {
  // 大量的功能实现
}

class Vampire extends Monster {
  get bloodType() {
    return '0'
  }
}

const monsters = new Map<string, Monster>()
monsters.set('Frankenstein', new Monster())
monsters.set('Godzilla', new Monster())
monsters.set('Dracula', new Vampire())

const vamp: Vampire = monsters['Dracula'];
```
<!--endsec-->

上面的例子充分展示了继承关系的概念，这有点类似其它语言中的`装箱`和`拆箱`概念，虽然monsters这个map内部只能存放Monster实例，但是我们却赋值了一个Vampire实例。相同地，我们从该map取值的时候理论上也应该Monster类型实例，但是我们却给他赋值了Vampire。这是一个非常典型的类型隐形向下转换的概念。    
