# 基础入门

> 本章不做TypeScript、C#的代码对比

由于本教程需要具有一定开发经验的阅读者才可以真正理解，因此建议阅读者在向下学习前先掌握以下基础技能：        

### 基础类型

* Numbers
* int
* double
* Strings
* Booleans
* Lists
* Maps
* Runes
* Symbols

Dart 中所有的数据类型都是 Object， 所以数据类型的默认值为 null   

在 Dart 中定义一个变量的方法： 例如：定义一个整型的变量 age，并赋上初始值为 10    

```dart
int age = 10;
var age = 10; // 类似dynamic，根据值类型自动转换标识符类型
```

上面这两种写法都是可以的，第二种方式会自动推断出 age 的类型为整型。    

定义一个字符串类型的变量 name，并赋上初始值为 "jack"   

```dart
String name = "jack";
var name = "jack";
```

布尔值类型    

```dart
bool isAlive = true;
var isAlive = true;
```

### 三目运算

```dart
var name_1;  
var name_2 = "Jack";
```

和 JS 中的三目运算一样：     

```dart
// name_1是否为空？为空 则取 name_2 否则 取值 name_1 的值
var finalName = name_1 == null ? name_2 : name_1;
```

在 Dart 中判空还有一种写法，使用 ?? 来判断，如下：     

```dart
var finalName = name_1 ?? name_2;
```

> 表示 如果 name_1 不为空，则返回 name_1，否则返回 name_2

### Switch

switch 的条件可以是 int， String， bool    

### for loop

```dart
List letters = ["a", "b", "c", "d"]; 
for (String letter in letters) { 
  print(letter);  
}
```

For 循环执行逻辑如下： Initialize --> Condition check --> Code Execute --> Increment / Decrement   

While 循环执行逻辑： Condition Check --> Code Execute --> Increment / Decrement   

Do - While 循环执行逻辑： Code Execute --> Increment / Decrement --> Condition Check   

### Function

Function在Dart也是一个对象。   

Dart 中的函数可以作为变量，也可以作为参数传递给其他的函数。    

##### 使用简短语法定义函数中的表达式

```dart
void main() {  
  sum(2, 3);  

  int result = reduce(2, 3);  
  print(result);  
}  

void sum(int a, int b) => print("a + b = ${a + b}");  

int reduce(int a, int b) => a - b;
```

Output:    

```dart
a + b = 5
-1
```

### 参数

Dart 中的参数分为两种，必须的和可选的，可选参数又包含三种分别为 位置参数（Positional），具名参数（Named）， 默认参数（Default）

##### 必须参数

```dart
void main() {  
  printName("Jack", "Rose");  
}  

// Required Parameters  
void printName(String name1, String name2) {  
  print('Name 1 is $name1, Name 2 is $name2');  
}
```

##### 可选参数

> 可选参数使用 [ ] 来包裹

```dart
void main() {  
  printCountries("China", "USA", "India");  
}  

// Optional Positional Parameters  
void printCountries(String name1, String name2, String name3) {  
  print('Name 1 is $name1');  
  print('Name 2 is $name2');  
  print('Name 3 is $name3');  
}
```

Output    

```dart
Name 1 is China
Name 2 is USA
Name 3 is India
```

这个时候我们想让第三个位置的参数变为可选的，就是用户调用的时候可以不传递。怎么写呢，如下：    

```dart
void main() {  
  printCountries("China", "USA");  
}  

// Optional Positional Parameters  
void printCountries(String name1, String name2, [String name3]) {  
  print('Name 1 is $name1');  
  print('Name 2 is $name2');  
  print('Name 3 is $name3');  
}
```

Output    

```dart
Name 1 is China
Name 2 is USA
Name 3 is null
```

那如果我们想让最后两个参数都变成可选的呢，也就是我们在调用上述方法的时候只需要传递一个参数     

```dart
void main() {  
  printCountries("China");  
}  

// Optional Positional Parameters  
void printCountries(String name1, [String name2, String name3]) {  
  print('Name 1 is $name1');  
  print('Name 2 is $name2');  
  print('Name 3 is $name3');  
}
```

Output    

```dart
Name 1 is China
Name 2 is null
Name 3 is null
```

##### 具名参数

> 具名参数使用 { } 来包裹 具名参数传递的时候，和参数顺序无关

当一个方法中有大量的参数的时候，我们可以使用具名参数来传递，可以防止参数传递错误：   

```dart
void main() {  
  printCities("Beijing", name2: "Shanghai", name3: "Guangzhou");  
}  


// Named Parameters  
void printCities(String name1, {String name2, String name3}) {  
  print('Name 1 is $name1');  
  print('Name 2 is $name2');  
  print('Name 3 is $name3');  
}
```

Output    

```dart
Name 1 is Beijing
Name 2 is Shanghai
Name 3 is Guangzhou
```

我们也可以值传递具名参数中的某一部分：    

```dart
printCities("Beijing", name2: "Shanghai");
```

Output    

```dart
Name 1 is Beijing
Name 2 is Shanghai
Name 3 is null
```

或者    

```dart
printCities("Beijing");
```

Output    

```dart
Name 1 is Beijing
Name 2 is null
Name 3 is null
```

##### 默认参数

> 顾名思义，默认参数就是可以为参数设置一个默认值。

```dart
void main() {  
  printNameByDefaultParameters("jack");  
}

// default parameters  
void printNameByDefaultParameters(String name1, {String name2 = "rose"}) {  
  print('name 1 is $name1');  
  print('name 2 is $name2');  
}
```

上述 printNameByDefaultParameters 方法中，我们为 name2 参数设置了默认值为 rose ，然后我们在调用该方法的时候就可以只传递参数 name1 。  

Output：    

```dart
name 1 is jack
name 2 is rose
```

当然，我们也可以不适用默认的参数的值，我们可以为其传递值，从而覆盖默认值：    

```dart
printNameByDefaultParameters("jack", name2: "Dfzq");
```

Output:    

```dart
name 1 is jack
name 2 is Dfzq
```

##### 异常处理

当程序终端
或者程序崩溃的时候，这个时候就需要我们处理异常。 我们来看一个例子：    

```dart
void main() {  
  int result = 12 ~/ 0;  
  print('The result is $result');  
}
```

上述程序会抛出除数不能为0的异常：    

```dart
Unhandled exception:
IntegerDivisionByZeroException
#0      int.~/ (dart:core/runtime/libintegers.dart:18:7)
...
```

如果我们知道程序会抛出哪一个异常，在 Dart 中，我们可以使用 try on 来捕获，如下：     

```dart
void main() {  
  try{  
    int result = 12 ~/ 0;  
  print('The result is $result');  
  } on IntegerDivisionByZeroException {  
    print('Cannot devide by zero');  
  }  
}
```

Output:    

```dart
Cannot devide by zero
```

如果我们不知道程序会抛出什么异常，使用 try catch 来捕获：    

```dart
try{  
  int result = 12 ~/ 0;  
  print('The result is $result');  
} catch (e) {  
  print('The exception is $e');  
}
```

Output:    

```dart
The exception is IntegerDivisionByZeroException
```

那如果我们想知道在抛出异常之前发生了什么，可以使用 Stack Trace 如下：     

```dart
try{  
  int result = 12 ~/ 0;  
  print('The result is $result');  
} catch (e, s) {  
  print('The exception is $e');  
  print('Stack Trace \n $s');  
}
```

Output:    

```dart
The exception is IntegerDivisionByZeroException
Stack Trace 
 #0      int.~/ (dart:core/runtime/libintegers.dart:18:7)
#1      main (file:///Users/liusilong/Dev/Flutter/workspace/DartDemo/src/youtube/exception/Demo1.dart:24:21)
#2      _startIsolate.<anonymous closure> (dart:isolate/runtime/libisolate_patch.dart:289:19)
#3      _RawReceivePortImpl._handleMessage (dart:isolate/runtime/libisolate_patch.dart:171:12)
```

##### Finally

无论异常是否抛出，finally 语句块总会被执行：    

```dart
try{  
  int result = 12 ~/ 0;  
  print('The result is $result');  
} catch (e) {  
  print('The exception is $e');  
}finally{  
  print('finally is always executed');  
}
```

Output:    

```dart
The exception is IntegerDivisionByZeroException
finally is always executed
```

上述代码即使不抛出异常，finally 语句块中还是会被执行：     

```dart
try{  
  int result = 12 ~/ 3;  
  print('The result is $result');  
} catch (e) {  
  print('The exception is $e');  
}finally{  
  print('finally is always executed');  
}
```

Output:    

```dart
The result is 4
finally is always executed
```

##### 自定义异常

下面来定义一个方法，该方法不能接受小于 0 的参数，然后我们自定义一个异常，来捕获传入该方法的参数是否小于 0 。     

```dart
// 自定义异常
class MyException implements Exception {  
  String errorMsg() {  
    return "count 不能小于0";  
  }  
}

// counter 参数不能小于 0
void enterCounter(int counter) {  
  if(counter < 0) {  
    throw MyException();  
  }  
}

// 调用
try {  
  enterCounter(-2);  
} catch(e) {  
  print(e.errorMsg());  
}
```

Output：     

```dart
count 不能小于0
```

##### 面向对象

定义一个类     

下面我们来定义一个 Student 类，并声明一些实例变量和实例方法：      

```dart
class Student {  
  // 默认值为 null  
  int id = 7;  
  // 默认值为 null  
  String name;  

  void study(){  
    print('${this.name} is now studying');  
  }  

  void sleep(){  
    print('${this.name} is now sleeping');  
  }  
}
```

接下来我们实例化一个 Student 然后为其属性赋值，并调用其方法：     

```dart
void main() {  
  var stu = Student();  
  stu.id = 8;  
  stu.name = "jack";  
  print('${stu.id} and ${stu.name}');  
  stu.study();  
  stu.sleep();  
}
```

Output:     

```dart
8 and jack
jack is now studying
jack is now sleeping
```

##### 定义构造函数

默认构造函数     

同 TS 一样，在 Dart 中，一个类也会有一个默认的无参的构造函数，我们也可以将其定义出来：     

```dart
// default constructor  
Student() {  
  print('This is default constructor');  
}
```

##### 带有参数的构造函数

```dart
// 带有参数的构造方法  
Student(int id, String name) {  
  this.id = id;  
  this.name = name;  
}
```

默认构造方法和带有参数的构造方法不能同时存在，否则在编译器就会报错。     

##### 参数化构造函数

一般情况下，我们的在构造方法中传递的参数会给当前类的实例变量赋值如：this.id = id，这个时候，我们可以直接使用参数话构造函数，如下：     

```dart
// 参数化构造函数
Student(this.id, this.name);
```

那么，如果我们在一个类中先要定义多个构造方法怎么办，这个时候可以使用 命名构造函数      

我们在构造方法中同样可以使用具名参数，如下：  

```dart
void main(){  
  var p = Person("Jack");  
  p.getInfo();  

  var p2 = Person("Rose", age: 18);  
  p2.getInfo();  
}

class Person{  
  String name;  
  int age;  

  Person(this.name, {this.age});  

  void getInfo(){  
    print('name is $name, age is $age');  
  }  
}
```

Output:    

```dart
name is Jack, age is null
name is Rose, age is 18
```

###### 命名构造函数

```dart
// 参数化构造函数  
Student(this.id, this.name);  

Student.myConstructor(int id) {  
  this.id = id;  
  this.name = "Jack";  
}  

Student.anotherConstructor(String name) {  
  this.id = 10;  
  this.name = name;  
}
```

调用如下：    

```dart
void main() {  
  var stu1 = Student(8, "jack");  
  print('${stu1.id} and ${stu1.name}');  

  var stu2 = Student.myConstructor(7);  
  print('${stu2.id} and ${stu2.name}');  

  var stu3 = Student.anotherConstructor("Rose");  
  print('${stu3.id} and ${stu3.name}');  
}
```

Output:   

```dart
8 and jack
7 and Jack
10 and Rose
```

##### Getter 和 Setter

默认的Getter和Setter     

下面我们还是定义一个 Student 类，里面有 name 和 age 两个属性：    

```dart
class Student {  
  String name;  
  int age;  
}
```

接着我们来实例化出一个 Student 的实例，并且为其属性赋值：     

```dart
void main() {  
  var stu = Student();  
  // 调用默认的 Setter 方法设置 name  
  stu.name = "Jack";  
  // 调用默认的 Getter 方法获取 name  
  print('name is ${stu.name}');  
}
```

注意：上述代码中，我们分别调用了默认的 Setter 方法和 Getter 方法。     

Output:    

```dart
name is Jack
```

##### 自定义的 Getter 和 Setter

下面我们在 Student 类中新添加一个属性为 address，我们来自定义这个属性的 getter 和 setter 方法：     

```dart
class Student {  
  String name; // 默认的 getter 和 setter  
  int age; // 默认的 getter 和 setter  

  // new line  
  String address; // 自定义的 getter 和 setter  

  set setAddress(String address) {  
    this.address = address;  
  print('调用了 address 的 setter 方法，值为 $address');  
  }  

  get getAddress {  
    print('调用了 address 的 getter 方法');  
  return address;  
  }  
}
```

调用      

```dart
stu.setAddress = "China";  
print('stu address is ${stu.getAddress}');
```

Output:    

```dart
调用了 address 的 setter 方法，值为 China
调用了 address 的 getter 方法
stu address is China
```

##### 继承

和 TS 中的继承类似，Dart 中也是使用 extends 关键字来实现继承，同样，也可以实现方法重载。     

下面例子中，我们定义一个父类 Animal，子类 Dog来演示他们之间的继承关系以及方法重载的实现：     

```dart
void main() {  
  var dog = Dog();  
  dog.bark();  
  dog.eat();  
}

// 父类  
class Animal {  
  void eat() {  
    print('Animal is eating');  
  }  
}

// 子类  
class Dog extends Animal {  
  // 方法重载  
  void eat() {  
    // 通过 super 调用父类方法  
  super.eat();  
  print('Dog is eating');  
  }  

  void bark() {  
    print('Brak!');  
  }  
}
```

Output:    

```dart
Brak!
Animal is eating
Dog is eating
```

##### 继承中的构造方法

一般情况下，如果父类没有有参构造方法，那么我们可以直接这样:     

```dart
// 父类
class Animal {  
  String color;  
  // 默认的构造方法  
  Animal() {}  
}  

// 子类
class Dog extends Animal {  
  final String name;  
  // 带有一个参数的构造方法  
  Dog(this.name):super() {}  
}
```

上述情况中，Animal 类中的构造方法没有参数，我们在 Dog 类中可以将 Dog(this.name):super() 后面部分省略，写为Dog(this.name)     

那么如果父类中有参数的情况下，上述 Dog 类中的写法就会报错了。     

所以我们可以这样写：     

```dart
class Animal {  
  String color;  

  Animal(String color) {}  
}  

class Dog extends Animal {  
  final String name;  

  Dog(this.name, String color) : super(color) {}  
}
```

同样的，我们也可以在子类中使用命名构造方法：    

```dart
class Dog extends Animal {  
  final String name;  

  Dog(this.name, String color) : super(color) {}  

  Dog.myDog(this.name): super("White"){  

  }  
}
```

我们在实例化 Dog 类的时候可以这样：     

```dart
void main() {  
  var dog1 = Dog("petter", "Blcak");  

  var dog2 = Dog.myDog("Hello");  
}
```

当然，如果父类中有命名构造方法，我们在子类中构造方法中去调用父类的命名构造方法：     

```dart
class Animal {  
  String color;  

  Animal(String color) {}  

  Animal.myAnimal() {}  
}  

class Dog extends Animal {  
  final String name;  

  Dog(this.name, String color) : super(color) {}  

  Dog.myDog(this.name) : super("White") {}  

  // 调用父类的 命名构造 方法
  Dog.smallDog(this.name) : super.myAnimal() {}  
}
```

> 注意：默认情况下，子类中的构造方法调用的是父类的无参构造方法 父类的构造方法总是在子类的构造方法之前调用 如果在父类中没有默认构造方法（无参构造方法），那么需要我们手动调用父类中的某一个构造方法

##### 抽象类和抽象方法

和 TS 中的抽象类一样，Dart 中的抽象类也是使用 abstract 关键字类修饰。如： abstract class shape{} 抽象类不能直接被实例化，需要实现一个子类来继承它。 抽象类中可以包含抽象方法和非抽象方法。抽象方法不能包含方法体且子类必须实现，非抽象方法可以包含方法体且子类可以重写。 抽象类中也可以定义的实例变量。 抽象方法只能定义在抽象类中。     

```dart
void main() {
  var rect = Rectangle();
  rect.draw();
  rect.drawShape();
}

// 抽象类
abstract class Shape {
  // 定义实例变量
  int x;
  int y;

  // 非抽象方法，子类可以重写
  void drawShape() {
    print('draw shape');
  }

  // 抽象方法，子类必须实现
  void draw();
}

// 子类
class Rectangle extends Shape {

  // 实现父类的抽象方法（必选）
  @override
  void draw() {
    // TODO: implement draw
    print('draw Rectangle...');
  }

  // 重写父类的方法（可选）
  @override
  void drawShape() {
    // TODO: implement drawShape
    super.drawShape();
    print('rectangle drawshape');
  }
}
```

Output：     

```dart
draw Rectangle...
draw shape
rectangle drawshape
```

##### 接口

TS 中的接口是使用 Interface 关键字类修饰一个类，但是 Dart 中没有 Interface 关键字。Dart 中的接口依然是使用 class 类定义：     

```dart
void main() {
  var b = B();
  b.hello();
  b.hi();
}

class A {
  void hello() {
    print('A hello');
  }
}

class C {
  void hi() {
    print('C hi');
  }
}

// class B 实现了 接口 A，C
class B implements A, C {
  @override
  void hello() {
    // TODO: implement hello
    print('B hello');
  }

  @override
  void hi() {
    // TODO: implement hi
    print('B hi');
  }
}
```

Output:    

```dart
B hello
B hi
```

那么我们在实现的接口方法中能不能使用 super.hello() 呢？是不可以的，因为 hello 方法在父类型中是抽象的。如果我们将 implements 改为 extends 之后就可以了。     

总结： Dart 没有特定的语法来声明一个接口。 Dart 中的接口就是一个普通的类。 当你需要在子类中重新实现父类中的所有方法的时候，可以使用接口。 在接口的实现类中，会被强制要求实现父类中的所有方法。 可以implements多个类，但是只能 extends 一个类。    

##### 静态方法和变量

和 TS 中的静态变量类似，Dart 中的静态变量也是通过 static 关键字来声明，通过 类名.变量名 来访问     

```dart
void main() {
  print(Circle.pi);
}

class Circle {
  // 定义一个静态变量
  static double pi = 3.14;
}
```

Output:    

```dart
3.14
```

但是，在 Dart 中如果我们使用类的实例去访问该类中的静态变量，编译时就会报错。静态变量不能通过实例来访问。     

同样的，静态方法也是通过 static 关键字类声明，通过 类名.方法名 来调用； 同样的，静态方法也不能通过实例来访问。      

```dart
void main() {
  // 访问静态变量
  print(Circle.pi);
  // 调用静态方法
  Circle.calculateAre();
}

class Circle {
  // 定义静态变量
  static double pi = 3.14;

  // 定义静态方法
  static void calculateAre() {
    print('some code');
  }
}
```

Output:    

```dart
3.14
some code
```

静态方法中只能访问静态变量和静态方法，不能访问实例变量或者实例方法。      

总结：静态变量也被称为 类变量 静态方法也被称为 类方法 静态变量都是懒加载的，意思就是当你在程序中使用到的时候该静态变量才会被初始化。 静态变量或者静态方法与类的实例无关，它们都属于类本身，所以我么在静态方法中不能使用 this 关键字 在静态方法中，我们只能访问静态方法或者静态变量，不能访问该类中的实例变量或者实例方法。     

##### 高阶函数和 Lambda 表达式

> 在 Dart 中，方法也是一个对象 Lambda 是一个没有方法名的方法，等同于 JS 中的匿名函数

下面我们来看看示例：     

```dart
void main() {
  // 普通方法调用
  addTwoNumbers(2, 3);

  // 没有返回值的 Lambda
  Function addTwoNumbersByFunction = (int a, int b) {
    var sum = a + b;
    print('$sum');
  };

  addTwoNumbersByFunction(2, 3);

  // 带有返回值的 Lambda
  var sum = (int a, int b) {
    return a + b;
  };

  print('${sum(3, 4)}');
}

void addTwoNumbers(int a, int b) {
  var sum = a + b;
  print('$sum');
}
```

Output:    

```dart
5
5
7
```

我们还可以使用另外一种简短的语法来表示 Lambda，使用 => 来表示

```dart
void main(){
    // 使用简短语法声明没有返回值的 Lambda
    Function addTwoNumbersWithArrows = (int a, int b) => print('${a + b}');

    // 调用
    addTwoNumbersWithArrows(3, 8);


    // 使用简单语法声明带有返回值的 Lambda
    var sumWithArrows = (int a, int b) => a + b;
    // 调用
    print('${sumWithArrows(3, 7)}');
}
```

Output:    

```dart
11
10
```

##### 高阶函数

高阶函数的定义：     

* 可以接受一个 Function 作为参数的函数
* 可以返回一个 Function 的函数
* 以上两者都允许

在 JS 中函数几乎都是高阶函数，Dart在这块与其及其相似。      

下面我们来写一个用于四则运算的高阶函数：     

```dart
void main() {
  var plusResult = arithmetic(12, 3, (a, b) => a + b);
  var reduceResult = arithmetic(12, 3, (a, b) => a - b);
  var multiplyResult = arithmetic(12, 3, (a, b) => a * b);
  var divideResult = arithmetic(12, 3, (a, b) => a / b);

  print('plus result is $plusResult');
  print('reduce result is $reduceResult');
  print('myltiply result is $multiplyResult');
  print('divide result is $divideResult');
}

// 接受一个 Function 参数，并且返回了一个 Function
double arithmetic(double a, double b, Function function) {
  return function(a, b);
}
```

上述代码中 arithmetic 方法接受了一个 Function，并且将其作为返回值返回； 而参数 Function 是接受两个 double 类型的参数。     

我们在上一小节中讲到 高阶函数 可以使用没有名称的方法来表示也可以使用 Lambda 来表示。      

上述代码中使用的是 Lambda 作为高阶函数进行传递的，那么如果我们使用没有名称的方法来表示，如下：       

```dart
var modelResult = arithmetic(12, 3, (a, b) {
    return a % b;
  });
print('model result is $modelResult');
```

Output:    

```dart
plus result is 15.0
reduce result is 9.0
myltiply result is 36.0
divide result is 4.0
model result is 0.0
```

##### Collections

固定长度的 List     

我们来声明一个长度为 5 的整型 List     

定长的集合在被定义之后，长度就不能被改变      

```dart
void main() {
  // 声明一个固定长度的集合
  List<int> numList = List(5);
  // 添加元素
  numList.add(9);
  // 删除元素
  numList.remove(9);
  // 删除指定位置上的元素
  numList.removeAt(0);
  // 清空集合
  numList.clear();
}
```

那么如果我们只想上述代码之后会怎样呢？答案是会报错，因为上述代码中的4中操作在固定长度的集合中都不支持。     

Output:    

```dart
Unhandled exception:
Unsupported operation: Cannot add to a fixed-length list
...
```

这里顺带提一下，上述代码中我们知道了会抛出 Unsupported 异常，那么根据前面的知识，我们可以使用 try..on.. 来捕获，就当复习一下：     

```dart
void main() {
  try {
    // 声明一个固定长度的集合
    List<int> numList = List(5);
    // 添加元素
    numList.add(9);
    // 删除元素
    numList.remove(9);
    // 删除指定位置上的元素
    numList.removeAt(0);
    // 清空集合
    numList.clear();
  } on UnsupportedError {
    print('操作不支持...');
  }
}
```

Output:     

```dart
操作不支持...
```

那么回到我们的问题，固定长度的集合要怎么添加删除元素呢？如下：      

```dart
void main() {
  // 声明一个固定长度的集合
  List<int> numList = List(5);

  numList[0] = 1;
  numList[1] = 2;
  numList[2] = 3;
  numList[3] = 4;
  numList[4] = 5;

  print('遍历元素：');
  for (int value in numList) {
    print(value);
  }

  print('----更新第一个元素为 10------');

  numList[0] = 10;

  print('遍历元素：');
  numList.forEach((value) => print(value));

  print('----将第一个元素置为NULL---');

  numList[0] = null;

  print('遍历元素：');
  for (int i = 0; i < numList.length; i++) {
    print('${numList[i]}');
  }
}
```

上述代码中，我们使用了索引的方式来给固定长度的 List 赋值，并使用三种方式来遍历，第一种为 for..in ；第二种为 Lambda 表达式；第三种为常规的 for 循环     

Output：    

```dart
遍历元素：
1
2
3
4
5
----更新第一个元素为 10------
遍历元素：
10
2
3
4
5
----将第一个元素置为NULL---
遍历元素：
null
2
3
4
5
```

##### 动态长度的List

我们直接看示例：    

```dart
void main() {
  // 动态长度的 集合
  List<int> list = List();

  list.add(1);
  list.add(2);

  list.forEach((value) => print('$value'));
  print('');

  list.removeAt(0);
  list.forEach((value) => print('$value'));
  print('');

  list.add(3);
  list[0] = null;
  list.forEach((value) => print('$value'));
}
```

Output:    

```dart
1
2

2

null
3
```

还有一种声明方法：    

```dart
  // 这样也是一个动态的集合
  List<String> letterList = ["A", "B", "C"];

  letterList.add("D");
  letterList.add("E");

  letterList.forEach((letter) => print('$letter'));
```

Output:    

```dart
A
B
C
D
E
```

##### Set

Set 是无序的；Set 是不允许添加重复元素；Set 不能使用下标来获取里面里面的元素，因为它是无序的。      

```dart
void main() {
  // 方式一：
  Set<String> letterSet = Set.from(["A", "B", "C"]);
  letterSet.add("D");
  letterSet.add("E");
  // 重复的元素将被忽视
  letterSet.add("A");

  // 使用 for..in.. 遍历 Set
  for (String letter in letterSet) {
    print('$letter');
  }

  print('');

  // 方式二：
  Set<int> numSet = Set();
  numSet.add(0);
  numSet.add(1);
  numSet.add(2);

  // 使用 Lambda 遍历 Set
  numSet.forEach((value) => print('$value'));
}
```

Output:    

```dart
A
B
C
D
E

0
1
2
```

##### Map

Dart 中 Map 的特性和 Java 中的类似，都是以键值对的形式存放，Map 中的键是唯一的，但是值可以重复，Map 也是无序的。     

下面看看 Dart 中 Map 的基本操作：      

```dart
void main() {
  Map<String, String> letterMap = Map();
  letterMap["a"] = "A";
  letterMap["b"] = "B";
  letterMap["c"] = "C";

  // 检查是否存在某个 key
  letterMap.containsKey("a");
  // 更新某个 key 对应的 value，注意 value 为一个 Lambda 表达式
  letterMap.update("a", (value) => "${value}AA");

  // 获取 Map 的长度
  letterMap.length;
  // 删除 Map 中的某个元素
  letterMap.remove("c");
  // 清空 Map
  letterMap.clear();

  // 遍历所有的 key
  for (String key in letterMap.keys) {
    print('$key');
  }

  print('');

  // 遍历所有的 value
  for (String value in letterMap.values) {
    print('$value');
  }

  print('');

  // 遍历所有的 key-value
  letterMap.forEach((key, value) => print('$key == $value'));
}
```

上述代码中使用的是构造方法的方式来创建 Map，我们还可以使用一下方式来创建：     

```dart
Map<String, int> studentScoreMap = {
    "Jack": 90,
    "Rost": 100,
    "Mary": 30,
    "LiLei": 56
  };

studentScoreMap.forEach((name, source) => print('$name == $source'));
```

Output:     

Jack == 90
Rost == 100
Mary == 30
LiLei == 56

##### Callable

> 类似Java中对ToString()的重写

Callable 能让我们像调用方法一样调用某个类，不过我们在类中需要实现 call 方法：      

```dart
void main() {
  var personOne = Person();
  var info = personOne("Jack", 18);
  print('$info');
}

class Person {
  // 实现 call 方法
  String call(String name, int age) {
    return "$name is $age years old";
  }
}
```

Output:    

```dart
Jack is 18 years old
```
