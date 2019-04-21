var PointRedirect = /** @class */ (function () {
    function PointRedirect(x, y) {
        if (typeof x === 'number') {
            this.rho = x;
            this.theta = y;
        }
        else if (typeof x === 'object') {
            var a = x.get('a');
            var b = x.get('b');
            this.rho = Math.sqrt(a * a + b * b);
            this.theta = Math.atan(a / b);
        }
    }
    return PointRedirect;
}());
var point1 = new PointRedirect(1, 2);
console.log("rho: " + point1.rho + " theta: " + point1.theta);
var _map = new Map();
_map.set('a', 7);
_map.set('b', 8);
var point2 = new PointRedirect(_map);
console.log("rho: " + point2.rho + " theta: " + point2.theta);
