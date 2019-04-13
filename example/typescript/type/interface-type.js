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
var ArrayPair = /** @class */ (function () {
    function ArrayPair(a, b) {
        this._rep = [a, b];
    }
    Object.defineProperty(ArrayPair.prototype, "first", {
        get: function () {
            return this._rep[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArrayPair.prototype, "second", {
        get: function () {
            return this._rep[1];
        },
        enumerable: true,
        configurable: true
    });
    ArrayPair.prototype.plus = function () {
        return "first: " + this.first + "; sencond: " + this.second;
    };
    return ArrayPair;
}());
var reversePair = function (p, first, second) { return new p(first, second); };
var _reversePair = reversePair(ArrayPair, 3, 4);
console.log(_reversePair.plus());
var Monster = /** @class */ (function () {
    function Monster() {
    }
    return Monster;
}());
var Vampire = /** @class */ (function (_super) {
    __extends(Vampire, _super);
    function Vampire() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Vampire.prototype, "bloodType", {
        get: function () {
            return '0';
        },
        enumerable: true,
        configurable: true
    });
    return Vampire;
}(Monster));
var monsters = new Map();
monsters.set('Frankenstein', new Monster());
monsters.set('Godzilla', new Monster());
monsters.set('Dracula', new Vampire());
var vamp = monsters['Dracula'];
