// 动物超类
abstract class Animal {}
// 哺乳动物超类
abstract class Mammal extends Animal {}
// 鸟类超类
abstract class Bird extends Animal {}
// 鱼类超类
abstract class Fish extends Animal {}
// 跑的混入类
abstract class Walker {
  factory Walker._() => null;

  void walk() {
    print('I am walking');
  }
}
// 游的混入类
abstract class Swimmer {
  factory Swimmer._() => null;

  void swim() {
    print('I am swimming');
  }
}
// 飞的混入类
abstract class Flyer {
  factory Flyer._() => null;

  void fly() {
    print('I am flying');
  }
}

// 海豚
class Dolphin extends Mammal with Swimmer {}
// 蝙蝠
class Bat extends Mammal with Walker, Flyer {}
// 猫
class Cat extends Mammal with Walker {}
// 鸽子
class Dove extends Bird with Walker, Flyer {}
// 鸭子
class Duck extends Bird with Walker, Swimmer, Flyer {}
// 鲨鱼
class Shark extends Fish with Swimmer {}
// 文鳐鱼
class FlyingFish extends Fish with Swimmer, Flyer {}

main(List<String> args) {
  Cat cat = Cat();
  cat.walk();
  // cat.fly();  // NoSuchMethod

  Bat bat = Bat();
  bat.walk();
  bat.fly();

  // test
  Client().method();
}

abstract class Super {
  void method() {
    print('Super');
  }
}

class MySuper implements Super {
  @override
  void method() {
    print('MySuper');
  }
}

mixin Mixin on Super {
  void method() {
    super.method();
    print('Sub');
  }
}

class Client extends MySuper with Mixin {

}