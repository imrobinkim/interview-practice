// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {
  let slow = list.getFirst(); // or list.head
  let fast = list.getFirst();

  //if either value of fast.next/fast.next.next are equal to null, it means there's an end to linked list (exit while loop and return false)
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;

    //if slow and fast point to same obj/node in memory (same instance in memory), then linked list is a circular one
    if (slow === fast) {
      return true;
    }
  }

  return false;
}

module.exports = circular;
