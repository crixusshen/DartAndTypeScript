// 位置参数
const zero = () => 0
const id = (x) => x
function identity(x) {
  return x
}
const add = (a, b) => a + b
// 可选参数
const increment = (x, step = 1) => x + step
// 命名参数
function printCities(name1, { name2, name3 = 'Guangzhou' }) {
  console.log(`Name 1 is ${name1}`);
  console.log(`Name 2 is ${name2}`);
  console.log(`Name 3 is ${name3}`);
}
// 高阶函数
let __map = new Map<string, number>();
const fail = (): void => { throw new Error('Key not found') }
function lookup(key, { ifMissing = fail } = {}) {
  let result = __map[key]
  if (result == null) return ifMissing()
  return result
}

console.log(increment(1));  // 2
console.log(increment(2, 4)); // 6
// console.log(increment()); // 运行时错误
// console.log(increment(2, 3, 4));  // 运行时错误

printCities('Beijing', { name2: 'Shanghai' });

lookup('anything')  // 抛出错误
lookup('anything', { ifMissing: () => __map['anything'] = 42 }) // 42