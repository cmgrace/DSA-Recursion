function findPalindromes(str) {
  if (str.length === 0) return null;
  str = str
    .toLowerCase()
    .replace(/[^a-zA-Z]/g, " ")
    .split(" ");

  let palindromes = str.filter(
    (word) => word.length > 1 && word.split("").reverse().join("") === word
  );
  palindromes = [...new Set(palindromes)];

  return `${palindromes.map((word) => ` ${word}`)}, ${
    palindromes.length
  } words`;
}
console.log(findPalindromes("Dad gave mom a Tesla as a racecar"));
console.log(
  findPalindromes("you are a dirty trashcan full of poop and racecar LOL")
);
