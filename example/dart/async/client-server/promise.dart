library promise;
import 'dart:async' show Future, Completer;
import 'dart:mirrors' show InstanceMirror, reflect;

class Promise {
  Future _future;
  Promise(this._future);
  @override
  noSuchMethod(Invocation invocation) {
    onValue(v) {
      InstanceMirror m = reflect(v);
      var result = m.delegate(invocation);
      return result;
    }
    return new Promise(_future.then(onValue));
  }
}

class Resolver {
  Completer _completer = new Completer();
  Promise _promise;
  get promise {
    return _promise == null ? _promise = new Promise(_completer.future) : _promise;
  }
  resolve(v) {
    _completer.complete(v);
  }
}