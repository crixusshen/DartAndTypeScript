abstract class Department {
  readonly name
  constructor(public _name: string) {
    this.name = _name
  }

  public printName() {
    console.log(`Department name: ${this.name}`);
  }

  // 抽象方法作为协议，最好也定义好你的预期返回类型
  public abstract printMeeting(): void;
}

class AccountingDepartment extends Department {
  constructor() {
    super('Accounting and Auditing')  // 在派生类的构造函数中必须调用 super()
  }

  public printMeeting(): void {
    console.log('Generating accounting reports...');
  }
}

let department: Department; // // 允许创建一个抽象类型的引用
// department = new Department();  // 错误：不能创建一个抽象类的实例
department = new AccountingDepartment();  // 允许对一个抽象子类进行实例化和引用赋值
department.printName();
department.printMeeting();
// department.generateReport();  // 错误: 方法在声明的抽象类中不存在
