var Logger = /** @class */ (function () {
    function Logger(name) {
        this.name = name;
    }
    Logger.getInstance = function (name) {
        if (this._cache.has(name)) {
            return this._cache.get(name);
        }
        else {
            var logger = new Logger(name);
            this._cache.set(name, logger);
            return logger;
        }
    };
    Logger._cache = new Map();
    return Logger;
}());
var logger1 = Logger.getInstance('smsLogger');
var logger2 = Logger.getInstance('smsLogger');
console.log(logger1 == logger2); // true
var logger3 = Logger.getInstance('mobiLogger');
console.log(logger1 == logger3); // false
