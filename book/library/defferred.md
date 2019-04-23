# 延迟加载

延迟（defferred）加载允许引用程序按需加载库。下面是当你可能会使用延迟加载的某些情况：     

1. 为了减少应用程序的初始化启动时间；
2. 执行A/B测试 - 尝试的算法的替代实施方式中；
3. 加载很少使用的功能，例如可选的屏幕和对话框。

为了延迟加载一个库，必须使用defferred as 先导入它。当需要库时，使用该库的调用标识符调用loadLibrary()。         

<!--sec data-title="Dart" data-id="section1" data-show=true ces-->
```dart
// library/deferred/hello.dart:
library hello;

printGreeting() {
  return 'hello!';
}
```

```dart
// library/deferred/test.dart:
import 'hello.dart' deferred as hello;

greet() async {
  await hello.loadLibrary();
  return hello.printGreeting();
}

main(List<String> args) {
  greet().then((e) => print(e));
}
```
<!--endsec-->

<!--sec data-title="TypeScript" data-id="section2" data-show=true data-collapse=false ces-->
```javascript
// library/deferred/hello.ts:
export default async () => {
  return 'hello!'
}
```

```javascript
// library/deferred/test.ts:
import printGreeting from './hello'

const greet = async () => await printGreeting()

greet().then(e => console.log(e))

// 这句代码与上面2句等价，上面只是为了展示async和await同步特性
// printGreeting().then(e => console.log(e))
```
<!--endsec-->

在前面的代码中，在库加载好之前，await关键字会一直暂停后面的代码直到库被加载好。     

当然你可以在多次调用loadLibrary()，该库也只会被加载一次。     

当使用延迟加载时，请记住以下几点：     

* 延迟库的常量在其作为导入文件时不是常量。记住，这些常量不存在，直到延迟库被加载完毕。
* 调用loadLibrary()函数会返回一个Future对象（类似ES中的Promise对象）。
