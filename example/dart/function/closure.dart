main(List<String> args) {
  _sum(List<int> nums) => nums.reduce((a, b) => a + b);
  print(_sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // 45
}