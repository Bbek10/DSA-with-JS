var fib = function (n) {
  //n 0  case
  if (n === 0) {
    return 0;
  }
  //n 1 case
  if (n === 1) {
    return 1;
  } else {
    let a = 0;
    let b = 1;
    let c;
    //loop i from 2 as 0 ra 1 done
    for (let i = 2; i <= n; i++) {
      c = a + b;
      a = b;
      b = c;
    }
    return b;
  }
};

console.log(fib(6));
