var Newer = /** @class */ (function () {
    function Newer(x, y) {
        this._x = x;
        this._y = y;
    }
    return Newer;
}());
var aNewer = new Newer(3, 4);
var anotherNewer = new Newer(3, 4);
console.log(aNewer == anotherNewer); // false
