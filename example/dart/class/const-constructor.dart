class Point {
  final x, y;
  const Point(this.x, this.y);
}

main(List<String> args) {
  const origin = const Point(0, 0);
  // var origin2 = new Point(0, 0); // 这样也是可以的
  print(origin.x);
}