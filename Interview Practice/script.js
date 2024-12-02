const str1 = "Hello";
const str2 = "World 1234";

function mergeStrings() {
  let res = "";
  for (let i = 0; i < str1.length || i < str2.length; i++) {
    if (i < str1.length) {
      res += str1[i] + str2[i];
    } else {
      res += str2[i];
    }
  }
  return res;
}
const res = mergeStrings();

console.log(res);

// sum(2, 4);
// sum(2(4));
// function sum(a, b) {
//   return a + b;
// }

const arr = [
  [2, 4],
  [3, 6],
  [4, 8],
];
const arrFlat = arr.flat()

