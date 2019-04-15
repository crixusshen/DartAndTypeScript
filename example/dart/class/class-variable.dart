class Box {
  static var numberOfInstances = 0;
  Box() {
    ++numberOfInstances;
  }
}

class Cat {}
class DeadCat extends Cat {}
class LiveCat extends Cat {
  LiveCat() {
    print("I'm alive!");
  }
}
Cat schrodingers = new LiveCat();

main(List<String> args) {
  var box1 = new Box();
  var box2 = new Box();
  Box.numberOfInstances == 0 ? print('No boxes yet') : print('We have boxes!');

  schrodingers = new DeadCat();
}