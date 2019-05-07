# Future

future是代表可能还没有发生的运算结果的对象。结果可能在未来的某个时间是可知的，因此被称为“future”。一旦做出执行异步运算的请求，就可以以同步方式立即返回future，而实际运算可以稍后运行。future向请求异步操作的代码提供了一个句柄，即一个请求运算过程的引用。在请求的运算完成后，future可以用来访问结果。我们把这称为future已经完成或者已经解决。      

在Dart中，future由dart:async库中的Future类实现。Future是一个泛型类，其类型参数T用于表示future将完成的值类型。      

#### 使用future

future有一个then()方法，接收一个名为onValue的闭包作为参数。该闭包在future成功完成时被调用。闭包本身接收一个参数，类型为T，代表future运算结果的类型。因此，当future完成时，它所代表的值将会传递给onValue。       

假设我们有一份需要复制的文件。File对象支持用于复制文件的异步API：     

```dart
Future<File> copy(String newPath)
```

如果我们在一个File对象上调用copy()，则我们将得到一个future。该异步API的一个优点是可以发起复制文件的操作，而不用等待复制完成。缺点是，如果我们真的想对副本执行一些操作，则事情会变得优点复杂，因此我们必须与future交互。     

来看一个简单的测试，假设有一个文件，我们将其复制到myPath，那么我们可以断言生成的文件的路径肯定是myPath。因为copy()的结果是一个文件的future而不是文件本身，我们不能这么写：      

```dart
assert(myFile.copy(myPath).path == myPath);
```

正确的代码是：       

```dart
myFile.copy(myPath).then((f) { assert(f.path == myPath); });
```

当文件系统完成复制时，copy()返回的future将被一个真正的File对象完成，而传入then()的闭包也将被调用且参数为该File实例，从而导致断言的执行。而到那时，Dart已经继续向下运行很久了。       

future同样可以表示失败的运算，也定义了方法catchError()，并且接收一个闭包作为输入参数。如果future代表的运算抛出异常，则调用闭包，即onError。      
