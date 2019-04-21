class Logger {
  final String name;
  static final Map<String, Logger> _cache = <String, Logger>{};

  factory Logger(String name) {
    if (_cache.containsKey(name)) {
      return _cache[name];
    } else {
      final logger = new Logger._internal(name);
      _cache[name] = logger;
      return logger;
    }
  }

  Logger._internal(this.name);
}

main(List<String> args) {
  var logger1 = new Logger('smsLogger');
  var logger2 = new Logger('smsLogger');
  print(logger1 == logger2);  // true

  var logger3 = new Logger('mobiLogger');
  print(logger1 == logger3);  // false
}