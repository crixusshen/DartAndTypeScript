var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function echoInt(arg) {
    return arg;
}
// function echo(arg: any): any {
//   return arg
// }
function echo(arg) {
    return arg;
}
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
var Lengthwise = /** @class */ (function () {
    function Lengthwise() {
    }
    return Lengthwise;
}());
var LengthwiseObj = /** @class */ (function (_super) {
    __extends(LengthwiseObj, _super);
    function LengthwiseObj() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LengthwiseObj;
}(Lengthwise));
function loggingIdentityExtend(arg) {
    console.log(arg.length);
    return arg;
}
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
// 只能打印整数型
console.log(echoInt(123));
// 可打印任何类型
console.log(echo('123'));
var lists = [];
lists.push(1);
lists.push('2');
loggingIdentity(lists); // 2
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y; };
console.log(myGenericNumber.add(myGenericNumber.zeroValue, 3)); // 3
var stringNumeric = new GenericNumber();
stringNumeric.zeroValue = '0';
stringNumeric.add = function (x, y) { return "" + x + y; };
console.log(stringNumeric.add(stringNumeric.zeroValue, '3')); // 03
var lengthwiseObj = new LengthwiseObj();
lengthwiseObj.length = 5;
loggingIdentityExtend(lengthwiseObj); // 5
// TS同时还支持字面量相似规则
loggingIdentityExtend({ length: 5, value: 3 }); // 5
loggingIdentityExtend("12345"); // 5
loggingIdentityExtend([1, 2, 3, 4, 5]); // 5
