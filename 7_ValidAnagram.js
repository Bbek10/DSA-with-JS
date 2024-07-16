var isAnagram = function (s, t) {
  let new_s = s.split("").sort().join("");
  let new_t = t.split("").sort().join("");
  let flag = 0;

  if (s.length === t.length) {
    for (i = 0; i < new_s.length; i++) {
      if (new_s[i] === new_t[i]) {
        flag++;
      }
    }
    return flag === s.length;
  }
  return false;

  //sidhai sort garesi loop launu vanda yo garna paiyo
  //  return new_s === new_t;
};

let s = "anagram";
let t = "nagaram";
console.log(isAnagram(s, t));
