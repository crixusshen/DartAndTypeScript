"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stack1_1 = require("./stack1");
var stack2_1 = require("./stack2");
// 测试 stack1
stack1_1.push('gently');
stack1_1.push('harder');
console.log(stack1_1.pop());
console.log(stack1_1.last());
// 测试 stack2
stack2_1.push('gently');
stack2_1.push('harder');
console.log(stack2_1.pop());
console.log(stack2_1.last());
