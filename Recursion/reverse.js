function reverse(str) {
  let right = str.length - 1;
  let left = 0;
  let temp = "";

  while (left < right) {
    temp = str[left];
    str[left++] = str[right];
    str[right--] = temp;
  }
  if (left === right) return str;
}
// function reverse(str) {
//   if (str === "") return "";
//   else {
//     return reverse(str.slice(1)) + str.charAt(0);
//   }
// }

console.log(reverse("hello"));
