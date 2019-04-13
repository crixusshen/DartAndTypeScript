var ArrayPair = /** @class */ (function () {
    function ArrayPair(a, b) {
        this._rep = [a, b];
    }
    Object.defineProperty(ArrayPair.prototype, "first", {
        get: function () {
            return this._rep[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArrayPair.prototype, "second", {
        get: function () {
            return this._rep[1];
        },
        enumerable: true,
        configurable: true
    });
    ArrayPair.prototype.plus = function () {
        return "first: " + this.first + "; sencond: " + this.second;
    };
    return ArrayPair;
}());
var reversePair = function (p, first, second) { return new p(first, second); };
var _reversePair = reversePair(ArrayPair, 3, 4);
console.log(_reversePair.plus());
