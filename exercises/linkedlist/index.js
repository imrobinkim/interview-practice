// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  //next => reference to next node along chain of linked list
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    //don't want to overwrite existing node if there is one, so pass this.head (existing node) as 2nd arg to new node being created. New node will be new head of linked list and it'll hold ref to other node that existed before
    // const node = new Node(data, this.head);
    // this.head = node;

    // this.head = new Node(data, this.head);

    this.insertAt(data, 0);
  }

  size() {
    let counter = 0;
    //stores reference to first node in linked list to local variable "node"
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  getFirst() {
    // return this.getAt(0);
    return this.head;
  }

  getLast() {
    // if (!this.head) { 
    //   return null;
    // }

    // let node = this.head;

    // while (node) {
    //   if (!node.next) {
    //     return node;
    //   }
    //   node = node.next;
    // }

    return this.getAt(this.size() - 1);
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let previous = this.head;
    let node = previous.next;
    while (node.next) {
      previous = node;
      node = node.next
    }
    previous.next = null;
  }

  insertLast(data) {
    const newNode = new Node(data);
    const last = this.getLast();
    if (last) {
      last.next = newNode;
    } else {
      this.head = newNode;
    }
  }

  getAt(index) {
    let node = this.head;
    let counter = 0;

    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    return null;
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(index - 1);
    if (!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    //if this.getAt... returns falsey value, previous = this.getLast()
    const previous = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, previous.next);
    previous.next = node;
  }

  forEach(fn) {
    let node = this.head;
    let counter = 0;
    while (node) {
      //fn(node, index)
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }

  //iterator function
  //defines generator fn with key of Symbol.iterator
  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      //for every step along linked list, yield node
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
