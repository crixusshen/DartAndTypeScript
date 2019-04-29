// 位置参数
// zero() => 0;
get zero => 0;  // 与上面是等效的
id(x) => x;
identity(x) {
  return x;
}
add(a, b) => a + b;
// 可选参数
increment(x, [step = 1]) => x + step;
// 命名参数
// printCities(name1, { name2, name3 = "Guangzhou" }) {
//   print('Name 1 is $name1');
//   print('Name 2 is $name2');
//   print('Name 3 is $name3');
// }
printCities(name1, { name2, name3: "Guangzhou" }) { // 与上面是等效的，这里必须用双引号，不能用单引号
  print('Name 1 is $name1');
  print('Name 2 is $name2');
  print('Name 3 is $name3');
}
// 高阶函数
var __map = new Map();
fail() => throw('Key not found');
lookup(key, { ifMissing: fail }) {
  var result = __map[key];
  if (result == null) return ifMissing();
  return result;
}

main(List<String> args) {
  print(increment(1));  // 2
  print(increment(2, 4)); // 6
  // print(increment()); // 运行时错误
  // print(increment(2, 3, 4));  // 运行时错误

  printCities('Beijing', name2: 'Shanghai');

  lookup('anything'); // 抛出错误
  lookup('anything', ifMissing: () => __map['anything'] = 42);  // 42
}