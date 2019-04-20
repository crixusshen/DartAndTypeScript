import "dart:math";
class PointConstructor {
  num x;
  num y;

  // PointConstructor(num x, num y) {
  //   this.x = x;
  //   this.y = y;
  // }

  PointConstructor(this.x, this.y);

  PointConstructor.fromJson(Map json) {
    x = json['x'];
    y = json['y'];
  }
}

class Point3DConstructor extends PointConstructor {
  final rho, theta;
  Point3DConstructor(x, y): rho = sqrt(x * x + y * y), theta=atan(x/y), super(x, y);
}

main(List<String> args) {
  var defaultPoint = new PointConstructor(3, 4);
  print('x: ${defaultPoint.x} y: ${defaultPoint.y}'); // x: 3 y: 4

  Map<String, num> map = Map();
  map['x'] = 7;
  map['y'] = 8;
  var fromJsonPoint = new PointConstructor.fromJson(map);
  print('x: ${fromJsonPoint.x} y: ${fromJsonPoint.y}'); // x: 7 y: 8

  var point3D = new Point3DConstructor(1, 2);
  print('x: ${point3D.x} y: ${point3D.y} rho: ${point3D.rho} theta: ${point3D.theta}'); // x: 1 y: 2 rho: 2.23606797749979 theta: 0.46364760900080615
}