class Newer {
  readonly _x;
  readonly _y;
  constructor(x, y) {
    this._x = x;
    this._y = y;
  }

  public equals(obj: Newer) {
    return this._x == obj._x && this._y == obj._y
  }
}

const aNewer = new Newer(3, 4)
const anotherNewer = new Newer(3, 4)
console.log(aNewer == anotherNewer)  // false
console.log(aNewer.equals(anotherNewer))  // true