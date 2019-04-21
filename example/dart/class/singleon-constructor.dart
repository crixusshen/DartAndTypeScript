class Singleon {
  Singleon._();
 
  static Singleon _instance;
 
  static Singleon getInstance() {
    if (_instance == null) {
      _instance = Singleon._();
    }
    return _instance;
  }
}

main(List<String> args) {
  // var singleonInstance = new Singleon(); // The class 'Singleon' doesn't have a default constructor.
  var singleonInstance = Singleon.getInstance();
  var singleonInstance2 = Singleon.getInstance();
  print(singleonInstance == singleonInstance2); // true
}