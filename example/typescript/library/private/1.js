"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Bicycle = /** @class */ (function () {
    function Bicycle(cadence, gear) {
        this.cadence = cadence;
        this.gear = gear;
        this.speed = 0;
    }
    return Bicycle;
}());
var Test = /** @class */ (function () {
    function Test() {
    }
    Test.prototype.main = function () {
        var bike = new Bicycle(2, 1);
        // console.log(bike.speed) // 属性“speed”为私有属性，只能在类“Bicycle”中访问
    };
    return Test;
}());
exports.default = Bicycle;
