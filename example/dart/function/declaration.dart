fib(n) {
  sum(n) {
    if(n <= 1) {
      return 1;
    } else {
      return n + sum(n - 1);
    }
  }
  return sum(n);
}

main(List<String> args) {
  print(fib(5));  // 5+4+3+2+1=15
}
