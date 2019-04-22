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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 动物超类
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
// 哺乳动物超类
var Mammal = /** @class */ (function (_super) {
    __extends(Mammal, _super);
    function Mammal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Mammal;
}(Animal));
// 鸟类超类
var Bird = /** @class */ (function (_super) {
    __extends(Bird, _super);
    function Bird() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bird;
}(Animal));
// 鱼类超类
var Fish = /** @class */ (function (_super) {
    __extends(Fish, _super);
    function Fish() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Fish;
}(Animal));
// 跑的混入类
var Walker = /** @class */ (function () {
    function Walker() {
    }
    Walker.prototype.walk = function () {
        console.log('I am walking');
    };
    return Walker;
}());
// 游的混入类
var Swimmer = /** @class */ (function () {
    function Swimmer() {
    }
    Swimmer.prototype.swim = function () {
        console.log('I am swimming');
    };
    return Swimmer;
}());
// 飞的混入类
var Flyer = /** @class */ (function () {
    function Flyer() {
    }
    Flyer.prototype.fly = function () {
        console.log('I am flying');
    };
    return Flyer;
}());
// 修饰器注入混入
function mixins(mixinObjs) {
    // TS通过帮助函数实现混入操作
    var applyMixins = function (derivedCtor, baseCtors) {
        return baseCtors.forEach(function (baseCtor) {
            Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
                derivedCtor.prototype[name] = baseCtor.prototype[name];
            });
        });
    };
    return function (target) {
        applyMixins(target, mixinObjs);
    };
}
// 海豚
var Dolphin = /** @class */ (function (_super) {
    __extends(Dolphin, _super);
    function Dolphin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dolphin = __decorate([
        mixins([Swimmer])
    ], Dolphin);
    return Dolphin;
}(Mammal));
// 蝙蝠
var Bat = /** @class */ (function (_super) {
    __extends(Bat, _super);
    function Bat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bat = __decorate([
        mixins([Walker, Flyer])
    ], Bat);
    return Bat;
}(Mammal));
// 猫
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat = __decorate([
        mixins([Walker])
    ], Cat);
    return Cat;
}(Mammal));
// 鸽子
var Dove = /** @class */ (function (_super) {
    __extends(Dove, _super);
    function Dove() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dove = __decorate([
        mixins([Walker, Flyer])
    ], Dove);
    return Dove;
}(Bird));
// 鸭子
var Duck = /** @class */ (function (_super) {
    __extends(Duck, _super);
    function Duck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Duck = __decorate([
        mixins([Walker, Swimmer, Flyer])
    ], Duck);
    return Duck;
}(Bird));
// 鲨鱼
var Shark = /** @class */ (function (_super) {
    __extends(Shark, _super);
    function Shark() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Shark = __decorate([
        mixins([Swimmer])
    ], Shark);
    return Shark;
}(Fish));
// 文鳐鱼
var FlyingFish = /** @class */ (function (_super) {
    __extends(FlyingFish, _super);
    function FlyingFish() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FlyingFish = __decorate([
        mixins([Swimmer, Flyer])
    ], FlyingFish);
    return FlyingFish;
}(Fish));
var cat = new Cat();
cat.walk();
var bat = new Bat();
bat.walk();
bat.fly();
