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
var PointConstructor = /** @class */ (function () {
    function PointConstructor(x, y) {
        if (typeof x === 'number') {
            this.x = x;
            this.y = y;
        }
        else if (typeof x === 'object') {
            this.x = x.get('x');
            this.y = x.get('y');
        }
    }
    return PointConstructor;
}());
var Point3DConstructor = /** @class */ (function (_super) {
    __extends(Point3DConstructor, _super);
    function Point3DConstructor(x, y) {
        var _this = _super.call(this, x, y) || this;
        _this.rho = Math.sqrt(x * x + y * y);
        _this.theta = Math.atan(x / y);
        return _this;
    }
    return Point3DConstructor;
}(PointConstructor));
var defaultPoint = new PointConstructor(3, 4);
console.log("x: " + defaultPoint.x + " y: " + defaultPoint.y); // x: 3 y: 4
var map = new Map();
map.set('x', 7);
map.set('y', 8);
var fromJsonPoint = new PointConstructor(map);
console.log("x: " + fromJsonPoint.x + " y: " + fromJsonPoint.y); // x: 7 y: 8
var point3D = new Point3DConstructor(1, 2);
console.log("x: " + point3D.x + " y: " + point3D.y + " rho: " + point3D.rho + " theta: " + point3D.theta); // x: 1 y: 2 rho: 2.23606797749979 theta: 0.4636476090008061
