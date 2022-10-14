const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  getUnderlyingList() {
    return !this.List ? null : this.List;
  }

  enqueue(value) {
    let newNode = new ListNode(value);
    if (!this.List) {
      this.List = newNode;
      return;
    }
    let lastNode = this.List;
    while (lastNode.next) {
      lastNode = lastNode.next;
    }
    lastNode.next = newNode;
  }

  dequeue() {
    if (!this.List) return null;

    let node = this.List;
    this.List = !this.List.next ? null : this.List.next;
    return node.value;
  }
}

module.exports = {
  Queue,
};
