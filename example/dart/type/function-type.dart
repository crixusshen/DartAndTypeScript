typedef num Add(num x, num y);

// typedef void AddVoid(num x, num y);
typedef AddVoid(num x, num y); // 与上面的注释是等效的

// 可选参数和默认参数
// typedef Optional(int x, [int y = 1]);  // Default parameter values aren't allowed in typedefs
typedef int Optional(int x, [int y]);

// 命名参数
typedef String Named(int x, {int y, String z});

main(List<String> args) {
  // Add myAdd = (int x, num y) => x + y;  // The function expression type '(int, num) → num' isn't of type '(num, num) → num'. This means its parameter or return type does not match what is expected. Consider changing parameter type(s) or the returned type(s).
  Add myAdd = (num _x, num y) => _x + y;
  print(myAdd(1, 2)); // 3

  AddVoid myAddVoid = (num _x, num y) => { print('void') };
  myAddVoid(1, 2); // void

  Optional myOptional = (int x, [int y = 1]) => x + y;
  print(myOptional(2)); // 3
  print(myOptional(2, 3)); // 5

  Named myNamed = (int x, {int y, String z = 'zoo'}) => (x + y).toString() + z;
  print(myNamed(1, y: 2));  // 3zoo
  print(myNamed(1, y: 2, z: 'hi'));  // 3hi
}