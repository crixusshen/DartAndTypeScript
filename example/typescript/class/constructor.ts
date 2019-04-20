class PointConstructor {
  x: number
  y: number

  // constructor(x: number, y: number) {
  //   this.x = x
  //   this.y = y
  // }

  constructor(x: number, y: number)
  constructor(json: Map<string, number>)
  constructor(x?, y?) {
    if(typeof x === 'number') {
      this.x = x
      this.y = y
    }
    else if(typeof x === 'object') {
      this.x = x.get('x')
      this.y = x.get('y')
    }
  }
}

class Point3DConstructor extends PointConstructor {
  readonly rho
  readonly theta
  constructor(x, y) {
    super(x, y)
    this.rho = Math.sqrt(x * x + y * y)
    this.theta = Math.atan(x/y)
  }
}

var defaultPoint = new PointConstructor(3, 4)
console.log(`x: ${defaultPoint.x} y: ${defaultPoint.y}`)  // x: 3 y: 4

const map = new Map()
map.set('x', 7)
map.set('y', 8)
var fromJsonPoint = new PointConstructor(map);
console.log(`x: ${fromJsonPoint.x} y: ${fromJsonPoint.y}`); // x: 7 y: 8

var point3D = new Point3DConstructor(1, 2);
console.log(`x: ${point3D.x} y: ${point3D.y} rho: ${point3D.rho} theta: ${point3D.theta}`); // x: 1 y: 2 rho: 2.23606797749979 theta: 0.4636476090008061
