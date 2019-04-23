import 'hello.dart' deferred as hello;

greet() async {
  await hello.loadLibrary();
  return hello.printGreeting();
}

main(List<String> args) {
  greet().then((e) => print(e));
}