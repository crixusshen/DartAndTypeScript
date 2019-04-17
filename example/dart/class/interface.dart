abstract class ClockInterface {
  var currentTime;
  void setTime(DateTime d);
}

class Clock implements ClockInterface {
  @override
  var currentTime;

  @override
  void setTime(DateTime d) {
    this.currentTime = d;
  }
}

// 接口的继承
abstract class Shape {  // 形状
  String color;
}

abstract class Square extends Shape { // 正方形
  int sideLength;
}

class Rhombus implements Square { // 菱形
  @override
  String color;

  @override
  int sideLength;
}

main(List<String> args) {
  var clock = Clock();
  print(clock is ClockInterface);

  var rhombus = Rhombus();
  rhombus.color = 'red';
  rhombus.sideLength = 10;
}