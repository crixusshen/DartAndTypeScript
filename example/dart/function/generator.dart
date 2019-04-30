class NaturalsIterable extends Iterable {
  var n;
  NaturalsIterable.to(this.n);
  get iterator => new NaturalsIterator(n);
}

class NaturalsIterator extends Iterator {
  var n;
  var current = -1;
  NaturalsIterator(this.n);
  moveNext() {
    if (current < n) {
      current++;
      return true;
    }
    return false;
  }
}

naturalsTo(n) => new NaturalsIterable.to(n);

// 使用生成器做了优化，与上面的代码等效
naturalsTo2(n) sync* {
  var current = -1;
  while (current < n){
    yield ++current;
  }
}

main(List<String> args) {
  for(var i in naturalsTo(20)) {
    print(i); 
  }

  print('--split row--');

  for(var i in naturalsTo2(20)) {
    print(i);
  }
}