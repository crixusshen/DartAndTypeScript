import "dart:math";
class PointRedirect {
  var rho, theta;
  PointRedirect.polar(this.rho, this.theta);
  PointRedirect(a, b): this.polar(sqrt(a * a + b * b), atan(a/b));
}

main(List<String> args) {
  var point1 = new PointRedirect(1, 2);
  print('rho: ${point1.rho} theta: ${point1.theta}'); // rho: 2.23606797749979 theta: 0.46364760900080615

  var point2 = new PointRedirect.polar(1, 2);
  print('rho: ${point2.rho} theta: ${point2.theta}'); // rho: 1 theta: 2
}