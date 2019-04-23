# 导出

我们可以使用export关键字导出一个更大的库。随着我们的项目不断发展并超出了我们的预期，我们就需要把单个库拆分成多个库。    

导出指令允许一个库使用来自其他命名空间的对象来扩充自己的导出命名空间。      

导出的规则与导入、part的规则相同：导出使用的URI必须指向一个库，而且必须是不可变的没有使用插值的字符串字面量。如果违反了这些要求，那么编译器就会报错。如果一个库使用多个导出语句来导出同一个对象，那么也是一个编译错误。     

```dart
// library/export/new-stack1.dart:
library newStack1;

export '../import/stack1.dart' show push;
```

```dart
// library/export/test.dart:
import 'new-stack1.dart';

main(List<String> args) {
  push('gently');
  push('harder');
  // print(pop); // Undefined name 'pop'
  // print(last);  // Undefined name 'last'
}
```
