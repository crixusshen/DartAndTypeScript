import 'dart:async';

Future<int> foo0() async => 42;

Future<num> deffer = new Future.delayed(Duration(seconds: 2), () {
  return 2;
});

fooDeffer() async {
  print(1);
  print(await deffer);
  print(3);
}

main(List<String> args) {
  foo0().then((e) => print(e));  // 42

  fooDeffer();
}