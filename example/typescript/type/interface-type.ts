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