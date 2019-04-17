interface ClockInterface {
  currentTime: Date
  setTime(d: Date)
}

class Clock implements ClockInterface {
  currentTime: Date
  
  setTime(d: Date) {
    this.currentTime = d
  }
}

// 接口的继承
interface Shape {
  color: string
}

interface Square extends Shape {
  sideLength: number
}

const instanceOfClock = (props: any): props is ClockInterface => typeof (props as ClockInterface)['currentTime'] !== 'undefined'
var clock = new Clock()
console.log(instanceOfClock(clock))

let rhombus = <Square>{}
rhombus.color = 'red'
rhombus.sideLength = 10