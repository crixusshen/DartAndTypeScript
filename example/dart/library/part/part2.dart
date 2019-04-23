part of 'part1.dart';

output2() {
  // 共享了part1的命名空间
  push('gently');
  push('harder');
  print(pop);
  print(last);

  print(output);
}