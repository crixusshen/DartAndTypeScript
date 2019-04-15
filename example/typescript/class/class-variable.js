var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Box = /** @class */ (function () {
    function Box() {
        ++Box.numberOfInstances;
    }
    Box.numberOfInstances = 0;
    return Box;
}());
var Cat = /** @class */ (function () {
    function Cat() {
    }
    return Cat;
}());
var DeadCat = /** @class */ (function (_super) {
    __extends(DeadCat, _super);
    function DeadCat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DeadCat;
}(Cat));
var LiveCat = /** @class */ (function (_super) {
    __extends(LiveCat, _super);
    function LiveCat() {
        var _this = _super.call(this) || this;
        console.log("I'm alive!");
        return _this;
    }
    return LiveCat;
}(Cat));
// ts中没有顶层变量的说法，因此这里会被执行
var schrodingers = new LiveCat();
schrodingers = new DeadCat();
var box1 = new Box();
var box2 = new Box();
Box.numberOfInstances == 0 ? console.log('No boxes yet') : console.log('We have boxes!');
