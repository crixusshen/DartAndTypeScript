# 抽象类与抽象方法

通常来说，简单的声明一个方法而不提供它的实现是有意义的，在某些继承关系的封装中这种形式非常常见，这种方法被称为抽象方法。任何种类的实例方法都可以被抽象化，不管它是getter、setter、操作符或普通方法。    

声明一个抽象方法将告诉代码的阅读者，这个方法只在代码运行时才可用。有一个抽象方法的类本身就是一个抽象类，抽象类的声明是通过在类名前加上前缀`abstract`。    

抽象类作为其它子类（或称为派生类）的父类（或称为基类）使用。它不能被实例化，毕竟它缺失部分实现，对它进行实例化会导致运行时错误，具体来说会产生一个名为`AbstractClassInstantiationError`的错误。不同于接口，抽象类可以包含成员的实现细节。   

<!--sec data-title="Dart" data-id="section1" data-show=true ces-->
```dart
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
```
<!--endsec-->

<!--sec data-title="TypeScript" data-id="section2" data-show=true data-collapse=false ces-->
```javascript
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

```
<!--endsec-->

就运行时而言，抽象方法根本不存在。毕竟它们没有被实现，也无法被运行。调用抽象方法就与调用一个不存在的方法是一样的。    

Dart中还可以通过只包含抽象方法的抽象类来定义一个接口，这个将在后续展开讨论，这里不再讨论。   
