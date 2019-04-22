var PointClassMethod = /** @class */ (function () {
    function PointClassMethod(rho, theta) {
        this.rho = rho;
        this.theta = theta;
    }
    PointClassMethod.prototype.x = function () {
        return this.rho * Math.cos(this.theta);
    };
    PointClassMethod.prototype.y = function () {
        return this.rho * Math.sin(this.theta);
    };
    PointClassMethod.distance = function (p1, p2) {
        var dx = p1.x() - p2.x();
        var dy = p1.y() - p2.y();
        return Math.sqrt(dx * dx + dy * dy);
    };
    return PointClassMethod;
}());
var aPoint = new PointClassMethod(3, 30);
var anotherPoint = new PointClassMethod(4, 30);
var _distance = PointClassMethod.distance(aPoint, anotherPoint);
console.log(_distance); // 0.9999999999999999
