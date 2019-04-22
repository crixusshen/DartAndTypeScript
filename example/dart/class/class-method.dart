import 'dart:math';
class PointClassMethod {
  var rho, theta;
  PointClassMethod(this.rho, this.theta);
  x() => rho * cos(theta);
  y() => rho * sin(theta);
  static distance(p1, p2) {
    var dx = p1.x() - p2.x();
    var dy = p1.y() - p2.y();
    return sqrt(dx * dx + dy * dy);
  }
}

main(List<String> args) {
  var aPoint = PointClassMethod(3, 30);
  var anotherPoint = PointClassMethod(4, 30);
  var _distance = PointClassMethod.distance(aPoint, anotherPoint);
  print(_distance); // 0.9999999999999999
}