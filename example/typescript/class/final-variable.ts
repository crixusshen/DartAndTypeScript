class Point {
  readonly _x
  readonly _y
  constructor(x, y) {
    this._x = x
    this._y = y
  }
  // Point类的剩余代码 ...
}

const originPoint = new Point(0, 0)

// originPoint = new Point(0, 0) // Cannot assign to 'originPoint' because it is a constant.