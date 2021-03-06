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
console.log(aNewer.equals(anotherNewer)); // true
var SSS = /** @class */ (function (_super) {
    __extends(SSS, _super);
    function SSS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SSS.prototype, "_x", {
        get: function () {
            return 1;
        },
        enumerable: true,
        configurable: true
    });
    return SSS;
}(Newer));
