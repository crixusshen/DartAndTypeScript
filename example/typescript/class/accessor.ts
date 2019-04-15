class Employee {
  fullName: string
}

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