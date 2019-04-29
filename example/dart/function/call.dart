main(List<String> args) {
  // 数组的sort是一个void函数
  var sortedColors = ['red', 'green', 'blue', 'orange', 'pink'].sublist(1, 3)..sort();
  print(sortedColors);  // [blue, green]
}