abstract class Pair {
  get first;
  get second;
  plus();
}

class ArrayPair implements Pair {
  var _rep;
  ArrayPair(a, b) {
    _rep = [a, b];
  }
  get first => _rep[0];
  get second => _rep[1];
  plus() {
    return 'first: ${this.first}; sencond: ${this.second}';
  }
}

Pair reversePair(Pair p) => new ArrayPair(p.second, p.first);

main(List<String> args) {
  Pair _reversePair = reversePair(new ArrayPair(3, 4));
  print(_reversePair.plus());
}

class Monster {
  // 大量的功能实现
}

class Vampire extends Monster {
  get bloodType => '0';
}

Map<String, Monster> monsters = {
  'Frankenstein': new Monster(),
  'Godzilla': new Monster(),
  'Dracula': new Vampire()
};

Vampire vamp = monsters['Dracula'];