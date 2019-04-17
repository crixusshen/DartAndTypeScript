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
var S = /** @class */ (function () {
    function S() {
    }
    Object.defineProperty(S.prototype, "g", {
        get: function () {
            return 32;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(S.prototype, "s", {
        set: function (x) {
            this.v = 2;
        },
        enumerable: true,
        configurable: true
    });
    S.prototype.m = function (a, b) {
        return 91;
    };
    S.f = 0;
    return S;
}());
var C = /** @class */ (function (_super) {
    __extends(C, _super);
    function C() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return C;
}(S));
