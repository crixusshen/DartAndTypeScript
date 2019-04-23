# 导入

我们通常可以将库作为模块导入到另外的库中进行使用。Dart的导入语句适用于任意URI。      

```javascript
import './../relative/path/stack1.dart'
```

```javascript
import 'http://xxxxx/stack1.dart'
```

尽管如此，我们仍然不推荐使用上面这种URI的方式。因为只要导入的库的位置发生了变化，就会影响到我们的代码。通常更严谨的做法是讲库作为包上传到包管理器中（类似NPM）。具体语法如下：    

```javascript
import 'package:stack1.dart'
```

这种package:的导入方式会执行一个常驻的封装了代码位置信息的包管理器。Dart环境自带包管理器，这是一个官方的[《包仓库源》](https://pub.dartlang.org/)。     

而对于Dart平台自身的库就没有必要使用package:方式，这些库都是通过dart:来访问的，它们都是内置的。例如：     

```javascript
import 'dart:io'
import 'dart:html'
import 'dart:json'
...
```

库内可用的对象包含了库本身所声明的对象及通过导入语句从其他库导入的对象。dart:core中定义的对象是隐含导入的。       

##### 命名空间

命名空间在一些后端语言中使用的非常普遍，它可以有效的隔离相同命名的函数声明，同时它让代码更加具有语义化。在Dart中针对一些歧义对象的使用我们可以使用命名空间来解决，通过as关键字我们可以很轻松的实现这一点，设想下我们现在有2个完全一模一样的库，库中的函数命名也是一致的，但是在调用时你可能会发现编译器会发出警告，因为编译器不知道你所调用的函数到底是哪个库的。现在我们可以这样来解决这个问题：     

<!--sec data-title="Dart" data-id="section1" data-show=true ces-->
```dart
// library/import/stack1.dart:
library stack1;
final _contents = [];
get isEmpty => _contents.isEmpty;
get last => isEmpty ? throw 'Cannot get top of empty stack' : _contents.last;
get pop => isEmpty ? throw 'Cannot pop empty stack' : _contents.removeLast();
push(e) {
  _contents.add(e);
  return e;
}
```

```dart
// library/import/stack2.dart:
library stack2;
final _contents = [];
get isEmpty => _contents.isEmpty;
get last => isEmpty ? throw 'Cannot get top of empty stack' : _contents.last;
get pop => isEmpty ? throw 'Cannot pop empty stack' : _contents.removeLast();
push(e) {
  _contents.add(e);
  return e;
}
```

```dart
// library/import/test.dart:
import 'stack1.dart' as stack1 hide isEmpty;
import 'stack2.dart' as stack2 show push, pop, last;

main(List<String> args) {
  // 测试 stack1
  stack1.push('gently');
  stack1.push('harder');
  print(stack1.pop);
  print(stack1.last);
  // 测试 stack2
  stack2.push('gently');
  stack2.push('harder');
  print(stack2.pop);
  print(stack2.last);
}
```
<!--endsec-->

<!--sec data-title="TypeScript" data-id="section2" data-show=true data-collapse=false ces-->
```javascript
// library/import/stack1.ts:
const _contents = []
const isEmpty = () => _contents.length === 0
const last = () => isEmpty() ? new Error('Cannot get top of empty stack') : _contents.reverse()[0]
const pop = () => isEmpty() ? new Error('Cannot pop empty stack') : _contents.pop()
const push = (e) => {
  _contents.push(e)
  return e
}

export {
  last,
  pop,
  push,
}
```

```javascript
// library/import/stack2.ts:
const _contents = []
const isEmpty = () => _contents.length === 0
const last = () => isEmpty() ? new Error('Cannot get top of empty stack') : _contents.reverse()[0]
const pop = () => isEmpty() ? new Error('Cannot pop empty stack') : _contents.pop()
const push = (e) => {
  _contents.push(e)
  return e
}

export {
  last,
  pop,
  push,
}
```

```javascript
// library/import/test.ts:
import { last, pop, push } from './stack1'
import { last as stack2_last, pop as stack2_pop, push as stack2_push } from './stack2'

// 测试 stack1
push('gently');
push('harder');
console.log(pop());
console.log(last());
// 测试 stack2
stack2_push('gently');
stack2_push('harder');
console.log(stack2_pop());
console.log(stack2_last());
```
<!--endsec-->

##### 命名空间组合器：show和hide

Dart提供了额外的机制来控制导入到库内的对象，大多数情况下，一些库会提供大量已实现的函数，但是我们可能只需要使用其中某几个函数，而没必要全部去导入它们。Dart通过show和hide关键字来操纵被导入的命名空间。      

```dart
library lib1;
import 'stack1.dart' hide isEmpty, top;
```

hide组合器接受一个命名空间和一个标识符列表，并将标识符列表中的对象从命名空间中丢弃，然后产生一个新的命名空间。正如上述示例，只有pop和push在lib1中可用，因为这里导入的命名空间不再是stack1完整导出的命名空间。      

```dart
library lib1;
import 'stack1.dart' show pop, push;
```

show组合器类似，除了只有在标识符列表中出现的对象会被保留在命名空间中。       

何时使用show，何时使用hide呢？如果你导入一个大型的库，而你指向使用其中的少数成员，那么你会发现show更加方便。相反，如果你试图解决库之间的一两个冲突，那么你可能会选择使用hide，但更好的方式是通过as引入前缀来避免冲突。        
