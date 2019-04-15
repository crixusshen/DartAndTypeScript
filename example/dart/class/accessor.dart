class Employee {
  String fullName;
}

const passcode = 'secret passcode';

class EmployeeOptimize {
  String _fullName;

  get fullName {
    return this._fullName;
  }

  set fullName(String newName) {
    if (passcode == 'secret passcode') {
      this._fullName = newName;
    } else {
      print('Error: Unauthorized update of employee!');
    }
  }
}

main(List<String> args) {
  var employee = new EmployeeOptimize();
  employee.fullName = 'Crixus Shen';
  print('${employee.fullName}');
}