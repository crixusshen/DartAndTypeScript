// 动物超类
abstract class Animal {}
// 哺乳动物超类
abstract class Mammal extends Animal {}
// 鸟类超类
abstract class Bird extends Animal {}
// 鱼类超类
abstract class Fish extends Animal {}
// 跑的混入类
abstract class  Walker {
  walk(): void {
    console.log('I am walking')
  }
}
// 游的混入类
abstract class  Swimmer {
  swim(): void {
    console.log('I am swimming')
  }
}
// 飞的混入类
abstract class  Flyer {
  fly(): void {
    console.log('I am flying')
  }
}

// 修饰器注入混入
function mixins(mixinObjs: any[]) {
  // TS通过帮助函数实现混入操作
  const applyMixins = (derivedCtor: any, baseCtors: any[]) => 
    baseCtors.forEach(baseCtor => {
      Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
        derivedCtor.prototype[name] = baseCtor.prototype[name]
      })
    })
  return function(target) {
    applyMixins(target, mixinObjs)
  }
}

// 海豚
@mixins([Swimmer])
class Dolphin extends Mammal implements Swimmer {
  swim: () => void
}
// 蝙蝠
@mixins([Walker, Flyer])
class Bat extends Mammal implements Walker, Flyer {
  walk: () => void
  fly: () => void
}
// 猫
@mixins([Walker])
class Cat extends Mammal implements Walker {
  walk: () => void
}
// 鸽子
@mixins([Walker, Flyer])
class Dove extends Bird implements Walker, Flyer {
  walk: () => void
  fly: () => void
}
// 鸭子
@mixins([Walker, Swimmer, Flyer])
class Duck extends Bird implements Walker, Swimmer, Flyer {
  walk: () => void
  swim: () => void
  fly: () => void
}
// 鲨鱼
@mixins([Swimmer])
class Shark extends Fish implements Swimmer {
  swim: () => void
}
// 文鳐鱼
@mixins([Swimmer, Flyer])
class FlyingFish extends Fish implements Swimmer, Flyer {
  swim: () => void
  fly: () => void
}

const cat = new Cat()
cat.walk()

const bat = new Bat()
bat.walk()
bat.fly()