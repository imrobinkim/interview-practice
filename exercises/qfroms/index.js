// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor() {
    this.first = new Stack();
    this.second = new Stack();
  }

  add(record) {
    this.first.push(record);
  }

  remove() {
    //iterate through all records in first stack and while peek method returns truthy value, pop record out of 1st stack and push into 2nd stack
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }

    //save ref to this record to return later after restoring state of stacks
    const record = this.second.pop();

    //going back to original state
    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }

    return record;
  }

  peek() {
    //this == {first: Stack/Array, second: Stack}

    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }

    const record = this.second.peek();

    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }

    return record;
  }
}

const q = new Queue();
q.add('a');
q.add('b');
q.peek();

module.exports = Queue;
