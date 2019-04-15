var Employee = /** @class */ (function () {
    function Employee() {
    }
    return Employee;
}());
var passcode = 'secret passcode';
var EmployeeOptimize = /** @class */ (function () {
    function EmployeeOptimize() {
    }
    Object.defineProperty(EmployeeOptimize.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            if (passcode == 'secret passcode') {
                this._fullName = newName;
            }
            else {
                console.error('Error: Unauthorized update of employee!');
            }
        },
        enumerable: true,
        configurable: true
    });
    return EmployeeOptimize;
}());
var employee = new EmployeeOptimize();
employee.fullName = 'Crixus Shen';
console.log(employee.fullName);
