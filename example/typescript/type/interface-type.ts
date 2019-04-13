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
