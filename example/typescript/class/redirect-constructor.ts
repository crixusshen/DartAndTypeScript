class PointRedirect {
  rho: number
  theta: number

  constructor(rho: number, theta: number)
  constructor(json: Map<string, number>)
  constructor(x?, y?) {
    if(typeof x === 'number') {
      this.rho = x
      this.theta = y
    }
    else if(typeof x === 'object') {
      const a = x.get('a')
      const b = x.get('b')
      this.rho = Math.sqrt(a * a + b * b)
      this.theta = Math.atan(a/b)
    }
  }
}

var point1 = new PointRedirect(1, 2)
console.log(`rho: ${point1.rho} theta: ${point1.theta}`)  // rho: 1 theta: 2

const _map = new Map()
_map.set('a', 7)
_map.set('b', 8)
var point2 = new PointRedirect(_map)
console.log(`rho: ${point2.rho} theta: ${point2.theta}`)  // rho: 10.63014581273465 theta: 0.7188299996216245