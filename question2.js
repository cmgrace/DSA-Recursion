function MostOccurrence(str) {
  if (str.length === 0) return null;
  let map = new Map();
  str = str.toLowerCase();
  const words = str.split(/[ .:;?!~,`"&|()<>{}\[\]\r\n/\\]+/);
  let res = [];

  for (const word of words) {
    if (!map.has(word)) {
      map.set(word, 1);
    } else {
      let count = map.get(word);
      map.set(word, ++count);
    }
  }
  console.log(words); //why words has an empty string???
  map.forEach((key, value) => {
    res.push(`${value}=${key}`);
  });
  return res.join(",");
}

console.log(
  MostOccurrence(
    "Hello there, how are you? Can you tell me how to get to the nearest Starbucks?"
  )
);
