// expression 1:
var myAdd = function (_x, y) { return _x + y; };
// expression 2:
var myAdd2 = function (_x, y) { return _x + y; };
var myAddVoid = function (_x, y) { return console.log('void'); };
var myOptional = function (x, y) {
    if (y === void 0) { y = 1; }
    return x + y;
};
var myNamed = function (x, _a) {
    var y = _a.y, _b = _a.z, z = _b === void 0 ? 'zoo' : _b;
    return x + y + z;
};
console.log(myAdd(1, 2)); // 3
console.log(myAdd2(1, 2)); // 3
myAddVoid(1, 2); // void
console.log(myOptional(2)); // 3
console.log(myOptional(2, 3)); // 5
console.log(myNamed(1, { y: 2 })); // 3zoo
console.log(myNamed(1, { y: 2, z: 'hi' })); // 3hi
