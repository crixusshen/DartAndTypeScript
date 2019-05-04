int echoInt(int arg) {
  return arg;
}

// echo(arg) {
//   return arg;
// }

T echo<T>(T arg) {
  return arg;
}

List<T> loggingIdentity<T>(List<T> arg) {
  print(arg.length);
  return arg;
}

abstract class Lengthwise {
  int length;
}

class LengthwiseObj extends Lengthwise {}

T loggingIdentityExtend<T extends Lengthwise>(T arg) {
  print(arg.length);
  return arg;
}

class GenericNumber<T> {
  T zeroValue;
  Function add; // dart的缺点之一，无法对Function类型进行约束
}

main(List<String> args) {
  // 只能打印整数型
  print(echoInt(123));

  // 可打印任何类型
  print(echo('123'));

  List lists = [];
  lists..add(1)..add('2');
  loggingIdentity(lists); // 2

  var myGenericNumber = new GenericNumber<int>();
  myGenericNumber.zeroValue = 0;
  myGenericNumber.add = (int x, int y) => x + y;
  print(myGenericNumber.add(myGenericNumber.zeroValue, 3)); // 3

  var stringNumeric = new GenericNumber<String>();
  stringNumeric.zeroValue = '0';
  stringNumeric.add = (String x, String y) => x + y;
  print(stringNumeric.add(stringNumeric.zeroValue, '3')); // 03

  loggingIdentityExtend(new LengthwiseObj()..length = 5); // 5
}