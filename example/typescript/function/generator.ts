class NaturalsIterable {
  constructor(private n: number){}
  [Symbol.iterator]() {
    return new NaturalsIterator(this.n)
  }
}

class NaturalsIterator {
  private current = -1
  constructor(private n: number){}
  next() {
    if (this.current < this.n) {
      this.current++
      return { done: false, value: this.current }
    }
    return { done: true, value: undefined }
  }
}

const naturalsTo = n => new NaturalsIterable(n)

// 使用生成器做了优化，与上面的代码等效
const naturalsTo2 = function* (n) {
  let current = -1
  while (current < n){
    yield ++current
  }
}

for(let i of naturalsTo(20)) {
  console.log(i)
}

console.log('--split row--');

for(let i of naturalsTo2(20)) {
  console.log(i)
}