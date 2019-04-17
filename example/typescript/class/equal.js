var Newer = /** @class */ (function () {
    function Newer(x, y) {
        this._x = x;
        this._y = y;
    }
    Newer.prototype.equals = function (obj) {
        return this._x == obj._x && this._y == obj._y;
    };
    return Newer;
}());
var aNewer = new Newer(3, 4);
var anotherNewer = new Newer(3, 4);
console.log(aNewer == anotherNewer); // false
console.log(aNewer.equals(anotherNewer));
