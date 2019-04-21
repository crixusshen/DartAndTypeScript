class Logger {
  static readonly _cache: Map<string, Logger> = new Map();

  static getInstance(name: string) {
    if (this._cache.has(name)) {
      return this._cache.get(name)
    } else {
      const logger = new Logger(name)
      this._cache.set(name, logger)
      return logger
    }
  }

  constructor(public name: string){}
}

const logger1 = Logger.getInstance('smsLogger')
const logger2 = Logger.getInstance('smsLogger')
console.log(logger1 == logger2);  // true

const logger3 = Logger.getInstance('mobiLogger')
console.log(logger1 == logger3);  // false