function pattern(n) {
  for (let i = 1; i <= n; i++) {
    let digit = "";
    let mid = n;
    // left side
    for (let j = 1; j <= i; j++) {
      digit += j;
    }
    // add space
    let space = 2 * (n - i) - 1;
    let k = 1;
    while (k <= space) {
      digit += " ";
      k++;
    }
    //right side
    for (let j = i; j >= 1; j--) {
      if (mid == j) {
        j--;
        digit += j;
      } else {
        digit += j;
      }
    }
    console.log(digit);
  }

  //reverse
  for (let i = n - 1; i >= 1; i--) {
    let digit = "";
    let mid = n;
    // left side
    for (let j = 1; j <= i; j++) {
      digit += j;
    }
    // add space
    let space = 2 * (n - i) - 1;
    let k = 1;
    while (k <= space) {
      digit += " ";
      k++;
    }
    //right side
    for (let j = i; j >= 1; j--) {
      if (mid == j) {
        j--;
        digit += j;
      } else {
        digit += j;
      }
    }
    console.log(digit);
  }
}

pattern(5);
