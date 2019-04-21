class Singleon {
  private constructor() {}

  private static _instance

  static getInstance(): Singleon {
    if (this._instance == null) {
      this._instance = new Singleon()
    }
    return this._instance
  }
}

// const singleonInstance = new Singleon()  // 类“Singleon”的构造函数是私有的，仅可在类声明中访问。
const singleonInstance = Singleon.getInstance()
const singleonInstance2 = Singleon.getInstance()
console.log(singleonInstance == singleonInstance2)  // true