var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
var e_1, _a, e_2, _b;
var NaturalsIterable = /** @class */ (function () {
    function NaturalsIterable(n) {
        this.n = n;
    }
    NaturalsIterable.prototype[Symbol.iterator] = function () {
        return new NaturalsIterator(this.n);
    };
    return NaturalsIterable;
}());
var NaturalsIterator = /** @class */ (function () {
    function NaturalsIterator(n) {
        this.n = n;
        this.current = -1;
    }
    NaturalsIterator.prototype.next = function () {
        if (this.current < this.n) {
            this.current++;
            return { done: false, value: this.current };
        }
        return { done: true, value: undefined };
    };
    return NaturalsIterator;
}());
var naturalsTo = function (n) { return new NaturalsIterable(n); };
// 使用生成器做了优化，与上面的代码等效
var naturalsTo2 = function (n) {
    var current;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                current = -1;
                _a.label = 1;
            case 1:
                if (!(current < n)) return [3 /*break*/, 3];
                return [4 /*yield*/, ++current];
            case 2:
                _a.sent();
                return [3 /*break*/, 1];
            case 3: return [2 /*return*/];
        }
    });
};
try {
    for (var _c = __values(naturalsTo(20)), _d = _c.next(); !_d.done; _d = _c.next()) {
        var i_1 = _d.value;
        console.log(i_1);
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
    }
    finally { if (e_1) throw e_1.error; }
}
console.log('--split row--');
try {
    for (var _e = __values(naturalsTo2(20)), _f = _e.next(); !_f.done; _f = _e.next()) {
        var i_2 = _f.value;
        console.log(i_2);
    }
}
catch (e_2_1) { e_2 = { error: e_2_1 }; }
finally {
    try {
        if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
    }
    finally { if (e_2) throw e_2.error; }
}
