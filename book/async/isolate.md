# Isolate

解决Dart并发模型问题。isolate有着自身独立的内存和自身独立的单线程控制计算过程。单词“isolate”的意思就是分离，因此isolate之间的内存在逻辑上是分离的。isolate中的代码是按顺序来运行的，任何并发都是运行多个isolate的结果。因为Dart没有共享内存的并发，所以不需要锁而且没有发生竞争的可能性（这有效地解决了多线程共享内存的辣手问题）。        

由于isolate没有共享内存，所以它们之间可以通信的唯一方式是通过消息传递。Dart中的消息传递总是异步的，           

不像一些其它语言，isolate没有阻塞接收机制，因此不会发生死锁。      

#### Port

一个isolate有多个port。Port是Dart Isolate间通信的底层基础。Port有两种：send port和receive port。      

receive port是一个接收消息的stream；send port则允许发送消息给isolate，更确切地说，它允许将消息发送给receive port。send port可以被receive port生成，它将所有消息发送给对应的receive port。      

#### Spawning

在isolate中启动（创建）另一个isolate被称为spawning。生成isolate时需要指定一个库，isolate会从该库的main()方法开始执行，这个库被称为isolate的根库。               

类Isolate提供了两种用于生成isolate的类方法：第1种是spawnUri()，它基于给定库的URI来创建一个isolate；第2种是spawn()，它根据当前isolate的根库创建一个isolate。      

Dart程序的执行开始于main isolate（主isolate），它由Dart运行时产生。为了创建新的isolate，main isolate中运行的代码必须生成它们。当一个isolate创建了另一个isolate时，它有机会传递一些初始化参数，这些关键参数是一种初始消息。对消息的定义可以归纳为：消息可能是null、数字、布尔值、字符串、send port、消息列表或键值对都是消息的map。初始消息通常包括一个send port，新创建的isolate（spawnee）可以利用该send port将消息发送回声称它的isolate（它的spawner）。       

spawner如何产生一个send port并传递给它的spawnee呢？spawner创建receive port r1，从其中提取一个send port s1，然后创建一个新的isolate，并把新的send port s1传入：       

```dart
import 'dart:isolate';

main(List<String> args) { // 在isolate.dart中
  ReceivePort r1 = new ReceivePort();
  SendPort s1 = r1.sendPort;
  Isolate.spawnUri(new Uri(path: './otherIsolate.dart'), [], s1);
}
```

然后，spawnne创建它自身的receive port r2，并从中提取send port s2，将其通过s1发送给spawner。这种求偶配对方式生成了一堆可以互相通讯的isolate：       

```dart
import 'dart:isolate';

main(List<String> args, SendPort s1) { // 在otherIsolate.dart中
  ReceivePort r2 = new ReceivePort();
  SendPort s2 = r2.sendPort;
  s1.send(s2);
}
```

刚才描述的过程有点乏味，虽然这些都是每个isolate开头的三行常规代码，然而，port机制是非常灵活的，可以在其上构建各种更高级的机制。       

#### 安全性

isolate是Dart安全的基础。内存的隔离防止一个isolate影响另一个isolate的状态。因此，语言的隐私模型没有安全隐患。       
