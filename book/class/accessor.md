# 存取器

Dart支持通过getters/setters来截取对对象成员的访问。它能帮助你有效的控制对对象成员的访问。   

下面来看如何把一个简单的类改写成使用`get`和`set`。首先我们从一个没有使用存取器的例子开始。   

<!--sec data-title="Dart" data-id="section1" data-show=true ces-->
```dart
class Employee {
  String fullName;
}

main(List<String> args) {
  var employee = new Employee();
  employee.fullName = 'Crixus Shen';
  print('${employee.fullName}');
}
```
<!--endsec-->

<!--sec data-title="TypeScript" data-id="section2" data-show=true data-collapse=false ces-->
```javascript
class Employee {
  fullName: string
}

var employee = new Employee()
employee.fullName = 'Crixus Shen'
console.log(employee.fullName)
```
<!--endsec-->

我们可以随意的设置`fullName`，这是非常方便的，但是这也可能会带来麻烦。   

下面这个版本里，我们先检查用户密码是否正确，然后再允许其修改员工信息。我们把对`fullName`的直接访问改成了可以检查密码的`set`方法。我们也加了一个`get`方法，让上面的例子仍然可以工作。   

<!--sec data-title="Dart" data-id="section3" data-show=true ces-->
```dart
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
```
<!--endsec-->

<!--sec data-title="TypeScript" data-id="section4" data-show=true data-collapse=false ces-->
```javascript
const passcode = 'secret passcode'

class EmployeeOptimize {
  private _fullName: string

  get fullName(): string {
    return this._fullName
  }

  set fullName(newName: string) {
    if (passcode == 'secret passcode') {
      this._fullName = newName
    } else {
      console.error('Error: Unauthorized update of employee!')
    }
  }
}

var employee = new EmployeeOptimize()
employee.fullName = 'Crixus Shen'
console.log(employee.fullName)
```
<!--endsec-->

我们可以修改下密码，来验证存取器是否可以正常工作。当密码不对时，会提示我们没有权限修改员工。   

只带有`get`不带有`set`的存取器自动会被推断为`readonly`。   
