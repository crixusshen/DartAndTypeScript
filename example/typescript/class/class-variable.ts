class Box {
  static numberOfInstances = 0
  constructor() {
    ++Box.numberOfInstances
  }
}

class SuperCat {}
class DeadCat extends SuperCat {}
class LiveCat extends SuperCat {
  constructor() {
    super()
    console.log("I'm alive!")
  }
}
// ts中没有顶层变量的说法，因此这里会被执行
var schrodingers = new LiveCat()
schrodingers = new DeadCat();

var box1 = new Box()
var box2 = new Box()
Box.numberOfInstances == 0 ? console.log('No boxes yet') : console.log('We have boxes!')