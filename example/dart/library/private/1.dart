class Bicycle {
  Bicycle(this.cadence, this.gear);
  int cadence;
  int _speed = 0;
  int gear;
}

class Test{
  void main() {
    final bike = Bicycle(2, 1);
    print(bike._speed);
  }
}