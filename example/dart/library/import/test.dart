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