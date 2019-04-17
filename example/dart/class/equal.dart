class Newer {
  final x, y;
  Newer(this.x, this.y);

  operator == (N) => this.x == N.x && this.y == N.y;
}

main(List<String> args) {
  var aNewer = new Newer(3, 4);
  var anotherNewer = new Newer(3, 4);
  print(aNewer == anotherNewer);  // true，如果把`operator == (N) ...`这段代码注释则返回false
}