# 闭包

函数可以定义在表达式的内部。它们被称为函数字面量，也被称为闭包或者匿名函数。与函数声明不同，闭包没有函数名称。虽然如此，与其他函数一样，它们也有参数列表与函数体。      

```dart
(x) => x;
(x) { return x; }
(x, [step = 1]) => x + step;
(a, b) => a + b;
```

单看这些例子，可能不会马上明白闭包有多大的用处。它们看起来就像是没有名称的函数声明。而真正的好处则来自于将它们作为大型表达式的一部分。      

考虑一个列表元素求和的问题。我们可以使用for循环来实现这一点，但那时比较原始的实现方式。一个有经验的Dart开发者会这样去实现：     

<!--sec data-title="Dart" data-id="section1" data-show=true ces-->
```dart
main(List<String> args) {
  _sum(List<int> nums) => nums.reduce((a, b) => a + b);
  print(_sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // 45
}
```
<!--endsec-->

<!--sec data-title="TypeScript" data-id="section2" data-show=true data-collapse=false ces-->
```javascript
const _sum = (nums: number[]) => nums.reduce((a, b) => a + b)
console.log(_sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
```
<!--endsec-->

Dart中的列表及其他很多类型都定义了reduce()方法。任意实现了Iterable接口的类型应该都有一个可运行的内置函数reduce()。具体如何使用reduce你可以查询官方API的使用。我们在这里当然也可以不使用闭包来实现：     

```javascript
sum(nums){  // 不好的代码风格
  plus(a, b) => a + b;
  nums.reduce(plus);
}
```

以上代码稍显啰嗦并需要我们明明一个额外的函数。在执行加法的情况下，函数的名称还是显而易见的，但对下面这样的函数进行命名就变得很繁重：      

```javascript
country.cities.where((city) => city.population > 1000000);
```

这个函数可以找出所有country中人口数量大于一百万的城市。这段代码使用了where()方法，它也来自于Iterable，接受一个函数作为参数。在这种情况下，where()的参数必须是一个一元断言函数，而它将返回那些断言为真的元素。     
