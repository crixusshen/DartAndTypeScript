function echoInt(arg: number): number {
  return arg
}

// function echo(arg: any): any {
//   return arg
// }

function echo<T>(arg: T): T {
  return arg
}

function loggingIdentity<T>(arg: Array<T>): Array<T> {
  console.log(arg.length)
  return arg
}

abstract class Lengthwise {
  length: number;
}

class LengthwiseObj extends Lengthwise {}

function loggingIdentityExtend<T extends Lengthwise>(arg: T): T {
  console.log(arg.length)
  return arg
}

class GenericNumber<T> {
  zeroValue: T
  add: (x: T, y: T) => T
}

// 只能打印整数型
console.log(echoInt(123))

// 可打印任何类型
console.log(echo('123'))

const lists = []
lists.push(1)
lists.push('2')
loggingIdentity(lists)  // 2

var myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0
myGenericNumber.add = (x: number, y: number) => x + y
console.log(myGenericNumber.add(myGenericNumber.zeroValue, 3))  // 3

var stringNumeric = new GenericNumber<String>();
stringNumeric.zeroValue = '0'
stringNumeric.add = (x: String, y: String) => `${x}${y}`
console.log(stringNumeric.add(stringNumeric.zeroValue, '3'))  // 03

const lengthwiseObj = new LengthwiseObj()
lengthwiseObj.length = 5
loggingIdentityExtend(lengthwiseObj)  // 5
// TS同时还支持字面量相似规则
loggingIdentityExtend({length: 5, value: 3})  // 5
loggingIdentityExtend("12345")  // 5
loggingIdentityExtend([1, 2, 3, 4, 5])  // 5