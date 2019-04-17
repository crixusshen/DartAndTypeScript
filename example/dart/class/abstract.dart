abstract class Department {
  final name;
  Department(this.name) {

  }

  printName() {
    print('Department name: ${this.name}');
  }

  printMeeting();
}

class AccountingDepartment extends Department {
  AccountingDepartment(): super('Accounting and Auditing') {

  }

  // @override注解是可以省略的，但是还是加上，这样可以让阅读者更加语义化的理解
  @override
  printMeeting() {
    print('Generating accounting reports...');
  }

  generateReport() {
    print('Generating accounting reports...');
  }
}

main(List<String> args) {
  Department department;  // 允许创建一个抽象类型的引用
  // department = new Department();  // 错误：不能创建一个抽象类的实例
  department = new AccountingDepartment();  // 允许对一个抽象子类进行实例化和引用赋值
  department.printName();
  department.printMeeting();
  // department.generateReport();  // 错误: 方法在声明的抽象类中不存在
}