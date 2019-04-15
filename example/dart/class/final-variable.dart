class Point {
  final x, y;
  Point(this.x, this.y);
  // Point类的剩余代码 ...
}

final originPoint = new Point(0, 0);

main(List<String> args) {
  // originPoint = new Point(0, 0); // 'originPoint', a final variable, can only be set once.
}