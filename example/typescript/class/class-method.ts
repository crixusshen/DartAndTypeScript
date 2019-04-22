class PointClassMethod {
  constructor(public rho: number, public theta: number){}
  x() {
    return this.rho * Math.cos(this.theta)
  }
  y() {
    return this.rho * Math.sin(this.theta)
  }
  static distance(p1, p2) {
    const dx = p1.x() - p2.x()
    const dy = p1.y() - p2.y()
    return Math.sqrt(dx * dx + dy * dy)
  }
}

const aPoint = new PointClassMethod(3, 30);
const anotherPoint = new PointClassMethod(4, 30);
const _distance = PointClassMethod.distance(aPoint, anotherPoint);
console.log(_distance); // 0.9999999999999999