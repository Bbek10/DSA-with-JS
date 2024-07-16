var isPalindrome = function (s) {
  s = s.toLowerCase().replace(/[^a-z0-9]/gi, "");
  let reverse = "";

  //if split and reverse is allowed
  reverse = s.split("").reverse().join("");

  //if split and reverse method is not allowed
  // for (let i = 0; i < s.length; i++) {
  //     reverse = s[i] + reverse;
  // }
  return reverse === s;
};

s = "tacocat";
console.log(isPalindrome(s));
