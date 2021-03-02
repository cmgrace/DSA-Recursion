const LinkedList = require("./LinkedList");

class Node {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

const SLL = new LinkedList();

function removeDuplica(arr) {
  arr.sort((a, b) => a - b); //ASC
  for (const i of arr) {
    SLL.add(i);
  }

  curr = SLL.head;

  while (curr) {
    if (curr.next !== null && curr.val == curr.next.val) {
      //   console.log(curr);
      curr.next = curr.next.next;
    } else {
      //   console.log(curr);
      curr = curr.next;
    }
  }
  return SLL.head;
}

console.dir(
  removeDuplica([1, 2, 3, 5, 4, 3, 3, 3, 4, 3, 4, 5, 4, 4, 4, 4, 5]),
  {
    depth: null,
  }
);
