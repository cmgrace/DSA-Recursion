function mostCommon(str) {
  if (str.length === 0) return null;
  str = str.toLowerCase();
  let map = new Map();
  let max = 0;
  let mostCommon = "";
  for (let i = 0; i < str.length; i++) {
    if (!map.has(str.charAt(i))) {
      map.set(str.charAt(i), 1);
    } else {
      let count = map.get(str.charAt(i));
      map.set(str.charAt(i), ++count);
    }
  }

  map.forEach((value, key) => {
    if (value > max) {
      max = value;
      mostCommon = key;
    }
    //console.log(key, value);
  });
  //console.log(max);
  return mostCommon;
}

console.log(mostCommon("hello gracee"));
