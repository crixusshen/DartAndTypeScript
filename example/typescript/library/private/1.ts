class Bicycle {
  constructor(public cadence: number, public gear: number){}
  private readonly speed = 0
}

class Test {
  main(): void {
    const bike = new Bicycle(2, 1)
    // console.log(bike.speed) // 属性“speed”为私有属性，只能在类“Bicycle”中访问
  }
}

export default Bicycle