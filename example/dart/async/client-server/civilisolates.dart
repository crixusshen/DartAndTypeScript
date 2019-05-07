library civilisolates;

import 'dart:isolate';
import 'dart:async';
import 'dart:mirrors';
import 'promise.dart';

void serve(obj, SendPort client) {
  // 发送我们的地址给客户端
  ReceivePort rport = new ReceivePort();
  SendPort selfPort = rport.sendPort;
  client.send(selfPort);
  
  // 设置监听器以响应客户端请求
  InstanceMirror target = reflect(obj);
  rport.listen((msg) {
    var invArgs = msg[0];
    SendPort returnAddress = msg[1];
    // 转发调用给obj
    var result = target.invoke(invArgs[0], invArgs[1], invArgs[2]);
    // 抽取结果，发送回客户端
    returnAddress.send(result.reflectee);
  });
}

Promise startServiceObject(uri) {
  ReceivePort rport = new ReceivePort();
  SendPort selfPort =  rport.sendPort;
  // 启动服务isolate
  Isolate.spawnUri(uri, [], selfPort);
  // 当我们得到isolate的地址时
  // 我们可以为它设置一个代理
  // 同时，返回该代码的一个Promise
  var target = rport.elementAt(0);
  return new Promise(target.then((s) {
    return new IsolateProxy(s);
  }));
}

class IsolateProxy {
  final SendPort _sendPort;
  IsolateProxy(this._sendPort);
  @override
  noSuchMethod(Invocation invocation) {
    ReceivePort rport = new ReceivePort();
    // 创建专用Port以接收本次调用的应答
    SendPort selfPort = rport.sendPort;
    Resolver resolver = new Resolver();
    // 监听应答的返回
    rport.listen((answer) {
      var a =  answer[0];
      // 解决promise
      resolver.resolve(a);
      // 关闭本次调用的Port
      rport.close();
    });
    // 将其发送到目标isolate
    _sendPort.send([invocation.memberName, invocation.positionalArguments, selfPort]);
    return resolver.promise;
  }
}