var Singleon = /** @class */ (function () {
    function Singleon() {
    }
    Singleon.getInstance = function () {
        if (this._instance == null) {
            this._instance = new Singleon();
        }
        return this._instance;
    };
    return Singleon;
}());
// const singleonInstance = new Singleon()  // 类“Singleon”的构造函数是私有的，仅可在类声明中访问。
var singleonInstance = Singleon.getInstance();
var singleonInstance2 = Singleon.getInstance();
console.log(singleonInstance == singleonInstance2); // true
