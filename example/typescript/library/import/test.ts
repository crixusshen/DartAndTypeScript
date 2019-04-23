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