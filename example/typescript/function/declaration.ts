function fib(n) {
  function sum(n) {
    if(n <= 1) {
      return 1
    } else {
      return n + sum(n - 1)
    }
  }
  return sum(n)
}

console.log(fib(5)) // 15