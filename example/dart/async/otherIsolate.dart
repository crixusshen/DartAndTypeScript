import 'dart:isolate';

main(List<String> args, SendPort s1) {
  ReceivePort r2 = new ReceivePort();
  SendPort s2 = r2.sendPort;
  s1.send(s2);
}