# Async

直接与Future交互可能会比较复杂。部分原因是，我们熟悉的经典控制结构并没有为异步做考虑。一旦进行了异步调用，跟踪调用是否已经执行、执行是否成功以及结果是什么灯所有必要的工作就都成为程序员的责任。使用Future进行开发，在其工作完成时安排后续的工作，确定工作成功或不成功等，这一系列任务会变得相当的繁重。      

为了减轻使用异步操作的痛苦，Dart为一步函数提供了语言级的支持（即封装了Future的语法糖async函数）。函数体可以使用async修饰符进行标记，标记后的函数是一个async函数，返回的是一个Future<T>泛型类型：     

<!--sec data-title="Dart" data-id="section1" data-show=true ces-->
```dart
import 'dart:async';

Future<int> foo0() async => 42;

main(List<String> args) {
  foo0().then((e) => print(e));  // 42
}
```
<!--endsec-->

<!--sec data-title="TypeScript" data-id="section2" data-show=true data-collapse=false ces-->
```javascript
const foo0 = async () => 42;

foo0().then(e => console.log(e))  // 42
```
<!--endsec-->

使用async函数可以在多个方面简化处理Future和异步任务。       

当调用async函数时，函数的代码不会立即执行。相反，函数中的代码会安排在将来的某个时间执行。那函数将什么返回给调用者？一个在函数体执行成功或失败时被完成的Future。函数会自动生成该Future，并立即将它返回给调用者。          

显然，这可以让我们无需编写一定数量的样板代码，但async函数的真正价值在于它可以包含await表达式。       

#### await

await表达式允许我们像编写同步代码那样编写异步代码。执行await表达式允许我们在等待异步计算完成时暂停运行周围的函数。       

回想下在介绍Future时，我们想测试File的copy()方法是否正常工作。使用await，我们可以将断言写成：     

```dart
assert((await myFile.copy(myPath)).path == myPath);
```

这与我们同步版本的copy是非常接近的：     

```dart
assert((myFile.copy(myPath)).path == myPath);
```

并且比直接使用Future的版本更加直接和简单：      

```dart
myFile.copy(myPath).then((f) { assert(f.path == myPath); });
```

await只能在异步函数中使用。Dart编译器不会在其他地方接受等待。       

<!--sec data-title="Dart" data-id="section3" data-show=true ces-->
```dart
import 'dart:async';

Future<num> deffer = new Future.delayed(Duration(seconds: 2), () {
  return 2;
});

fooDeffer() async {
  print(1);
  print(await deffer);
  print(3);
}

main() {
  fooDeffer();
}
```
<!--endsec-->

<!--sec data-title="TypeScript" data-id="section4" data-show=true data-collapse=false ces-->
```javascript
const deffer = new Promise((resolve, reject) => setTimeout(_ => resolve(2), 2000))

async function fooDeffer() {
  console.log(1)
  console.log(await deffer)
  console.log(3)
}

fooDeffer()
```
<!--endsec-->

输出：     

```json
1
2
3
```

上面的示例会首先输出1，然后过2秒依次输出2和3。       