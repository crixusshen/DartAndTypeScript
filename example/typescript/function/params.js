// 位置参数
var zero = function () { return 0; };
var id = function (x) { return x; };
function identity(x) {
    return x;
}
var add = function (a, b) { return a + b; };
// 可选参数
var increment = function (x, step) {
    if (step === void 0) { step = 1; }
    return x + step;
};
// 命名参数
function printCities(name1, _a) {
    var name2 = _a.name2, _b = _a.name3, name3 = _b === void 0 ? 'Guangzhou' : _b;
    console.log("Name 1 is " + name1);
    console.log("Name 2 is " + name2);
    console.log("Name 3 is " + name3);
}
// 高阶函数
var __map = new Map();
var fail = function () { throw new Error('Key not found'); };
function lookup(key, _a) {
    var _b = (_a === void 0 ? {} : _a).ifMissing, ifMissing = _b === void 0 ? fail : _b;
    var result = __map[key];
    if (result == null)
        return ifMissing();
    return result;
}
console.log(increment(1)); // 2
console.log(increment(2, 4)); // 6
// console.log(increment()); // 运行时错误
// console.log(increment(2, 3, 4));  // 运行时错误
printCities('Beijing', { name2: 'Shanghai' });
lookup('anything');
lookup('anything', { ifMissing: function () { return __map['anything'] = 42; } });
