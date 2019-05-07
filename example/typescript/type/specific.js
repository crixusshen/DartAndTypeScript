var isList = function (props) { return typeof props['concat'] !== 'undefined'; };
var mapInstance = new Map();
var objectInstance = {};
var v = [1, 2, 3];
console.log(isList(v)); // true
console.log(isList(mapInstance)); // false
console.log(isList(objectInstance)); // false
// 在ts中也叫类型断言，有2种语法写法
// 写法1：
var o = [3, 4, 5];
console.log(o); // [3, 4, 5]
// console.log(<Map<number, number>>o) // 编译时通不过
// 写法2，即dart的写法：
console.log(o); // [3, 4, 5]
// console.log(o as Map<number, number>) // 编译时通不过
