import 'dart:isolate';

main(List<String> args) {
  ReceivePort r1 = new ReceivePort();
  SendPort s1 = r1.sendPort;
  Isolate.spawnUri(new Uri(path: './otherIsolate.dart'), [], s1);
}