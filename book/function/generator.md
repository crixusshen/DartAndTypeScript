# 生成器函数

Dart支持生成器，它是用来产生集合值的函数。生成器可以是同步或者异步的。同步的生成器为迭代器生成提供了语法糖，而异步的生成器则为流的生成提供的语法糖。     

这一章主要来讨论同步的生成器，后续章节会再讨论异步的生成器。     

#### 迭代器

在讨论生成器之前，我们首先先要理解迭代器的概念。迭代器是允许对集合内容按顺序进行迭代的对象。支持通过迭代器进行迭代的集合被称为可迭代对象（即实现get iterator函数的对象），可迭代对象必须有一个名为iterator的用于返回迭代器的getter函数。    

for-in循环可以操作任意可迭代对象。     

迭代器接口和指针对象的接口分别被类Iterable和Iterator实现。     

<!--sec data-title="Dart" data-id="section3" data-show=true ces-->
```dart
interface Iterable {
  get iterator: Iterator;
}
interface Iterator {
  moveNext(): bool;
}
```
<!--endsec-->

<!--sec data-title="TypeScript" data-id="section4" data-show=true data-collapse=false ces-->
```javascript
interface Iterable {
  [Symbol.iterator]() : Iterator,
}

interface Iterator {
  next(value?: any) : IterationResult,
}

interface IterationResult {
  value: any,
  done: boolean,
}
```
<!--endsec-->

Iterator接口的目的，就是为所有数据结构提供一种统一的访问机制，即for-in循环。当使用for-in循环遍历某种数据结构时，该循环自动去寻找Iterator接口。      

迭代器的生成非常的公式化。我们需要定义一个可迭代的集合类且必须为它定义一个返回iterator的getter。该getter函数对应当前对象的遍历器对象。这个遍历器对象具有current成员属性和moveNext()方法的实现，其中current代表每次迭代所要输出的值，而moveNext()则是实现整个遍历处理的逻辑。具体请查看下面的示例来帮助理解：    

<!--sec data-title="Dart" data-id="section1" data-show=true ces-->
```dart
class NaturalsIterable extends Iterable {
  var n;
  NaturalsIterable.to(this.n);
  get iterator => new NaturalsIterator(n);
}

class NaturalsIterator extends Iterator {
  var n;
  var current = -1;
  NaturalsIterator(this.n);
  moveNext() {
    if (current < n) {
      current++;
      return true;
    }
    return false;
  }
}

naturalsTo(n) => new NaturalsIterable.to(n);

main(List<String> args) {
  for(var i in naturalsTo(20))
    print(i); 
}
```
<!--endsec-->

<!--sec data-title="TypeScript" data-id="section2" data-show=true data-collapse=false ces-->
```javascript
class NaturalsIterable {
  constructor(private n: number){}
  [Symbol.iterator]() {
    return new NaturalsIterator(this.n)
  }
}

class NaturalsIterator {
  private current = -1
  constructor(private n: number){}
  next() {
    if (this.current < this.n) {
      this.current++
      return { done: false, value: this.current }
    }
    return { done: true, value: undefined }
  }
}

const naturalsTo = n => new NaturalsIterable(n)

for(let i of naturalsTo(20)) {
  console.log(i)
}
```
<!--endsec-->

输出:     

```dart
0
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
```

#### 同步生成器

为了减少迭代器而导致的重复代码，Dart提供了同步生成器函数来简化迭代器的实现。使用同步生成器，让我们省去了即使是实现最基本的迭代器也需要定义两个类的麻烦。我们可以给函数体使用sync*修饰符来定义一个生成器函数：    

<!--sec data-title="Dart" data-id="section5" data-show=true ces-->
```dart
naturalsTo2(n) sync* {
  var current = -1;
  while (current < n){
    yield ++current;
  }
}

main(List<String> args) {
  for(var i in naturalsTo2(20)) {
    print(i);
  }
}
```
<!--endsec-->

<!--sec data-title="TypeScript" data-id="section6" data-show=true data-collapse=false ces-->
```javascript
const naturalsTo2 = function* (n) {
  let current = -1
  while (current < n){
    yield ++current
  }
}

for(let i of naturalsTo2(20)) {
  console.log(i)
}
```
<!--endsec-->

使用生成器的代码相比迭代器的实现简化了很多，生成器函数的调用方法与普通函数一样，也是在函数后面加上一对圆括号。不同的是，调用生成器函数后，该函数并不会执行，返回的也不是函数运行结果，而是一个指向内部状态的指针对象，即迭代器对象。      

下一步必须调用迭代器对象的moveNext方法，使得指针移向下一个状态。也就是说，每次调用moveNext方法，内部指针就从函数头部或上一次停下来的地方开始执行，知道遇到下一个yield表达式（或return语句）为止。换句话说，生成器函数是分段执行的，yield表达式是暂停执行的标记，而moveNext方法是可以恢复执行的标记。      

正如上面所说，同步生成器中的yield语句将对象追加到与之关联的可迭代对象，并暂停函数体的执行。只有通过调用与之关联的迭代器的moveNext()方法才能让函数再次执行。当yield暂停执行函数体时，moveNext()返回true给调用者。当生成器终止时，moveNext()返回false。         