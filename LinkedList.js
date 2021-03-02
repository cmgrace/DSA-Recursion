class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(val) {
    let node = new Node(val);
    let curr;

    if (this.head === null) {
      this.head = node;
    } else {
      curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = node;
    }
    this.size++;
  }

  insertAt(val, index) {
    if (index < 0 || index > this.size) return false;
    else {
      let node = new Node(val, null);
      let prev, curr;
      curr = this.head;
      if (index === 0) {
        node.next = this.head;
        this.head = node;
      } else {
        let count = 0;
        while (count < index) {
          prev = curr;
          curr = curr.next;
          count++;
        }
        node.next = curr;
        prev.next = node;
      }
      this.size++;
    }
  }

  removeFrom(index) {
    if (index < 0 || index > this.size) return -1;
    else {
      let prev,
        curr,
        count = 0;
      curr = this.head;
      if (index === 0) {
        this.head = curr.next;
      } else {
        while (count < index) {
          prev = curr;
          curr = curr.next;
          count++;
        }
        prev.next = curr.next;
      }
      this.size--;
    }
  }

  removeElement(val) {
    let curr = this.head;
    let prev = null;
    while (curr) {
      if (curr.val === val) {
        if (prev === null) {
          this.head = curr.next;
        } else {
          prev.next = curr.next;
        }
        this.size--;
        return curr.val;
      }
      prev = curr;
      curr = curr.next;
    }
    return -1;
  }
}
(module.exports = LinkedList), Node;
