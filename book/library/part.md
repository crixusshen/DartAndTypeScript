# 库的拆分

有时一个库可能太大，不能方便的保存在一个文件中。Dart允许我们把一个库拆分成一个或者多个较小的part组件。或者我们想让某一些库共享它们的私有对象的时候，我们需要使用part。     

注意点：    

* 每个文件头上的part xxx和part of xxx是不能省略的。它可以为解释器指明它是某个库中的某个part。
* part of所在文件不能包括import、library等关键字。

```dart
// library/part/part1.dart:
library part1;
import '../import/stack1.dart';

part 'part2.dart';

get output => 'Hello Part1!';

main(List<String> args) {
  output2();
}
```

```dart
// library/part/part2.dart:
part of 'part1.dart';

output2() {
  // 共享了part1的命名空间
  push('gently');
  push('harder');
  print(pop);
  print(last);

  print(output);
}
```

输出：    

```dart
harder
gently
Hello Part1!
```

可以看出，part2是part1的part，可以理解为，part2是part1的一部分。在part2中我们并没有引入../import/stack1.dart包就可以直接继承该包中的所有导出对象。这是因为，在part中，凡是采用import关键字导入的库都是可以被共享命名空间的。     

不是所有的库都有名称，但如果使用part来构件库，那么库必须要命名。     

```dart
library xxx;
```

每个子part都存放在各自的文件中。但是它们共享同一作用域，库的内部命名空间，以及所有的导入（import）。      

##### part和import的区别

* 可见性：如果说在A库中import了B库，A库对B库是不可见的，也就是说B库是无法知道A库的存在的。而part的作用是将一个库拆分成较小的组件。两个或多个part共同构成一个库，它们彼此之间是知道互相的存在的。    
* 作用域：import不会完全共享作用域，而part之间是完全共享的。如果说在A库中import了B库，B库import了C库，A库是没有办法直接使用C库的对象的。而B，C若是A的part，那么三者共享所有对象，并且包含所有的导入。    
