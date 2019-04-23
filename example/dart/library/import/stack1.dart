library stack1;
final _contents = [];
get isEmpty => _contents.isEmpty;
get last => isEmpty ? throw 'Cannot get top of empty stack' : _contents.last;
get pop => isEmpty ? throw 'Cannot pop empty stack' : _contents.removeLast();
push(e) {
  _contents.add(e);
  return e;
}