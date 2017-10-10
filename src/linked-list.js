/* eslint-disable class-methods-use-this */
class Node {
  constructor(data) {
    this.next = null;
    this.data = data;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    // Do not modify anything inside of the constructor
  }
  // Wraps the given value in a node object and adds the node to the tail of the list
  // If the list is empty, the new element is considered the tail as well as the head
  // If there is one element in the list before the new element is added, the new element becomes the tail of the list
  addToTail(value) {
    const newNode = {
      value,
      next: null
    };
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  // Removes the current head node from the list, replacing it with the next element in the list
  // Returns the value of the removed node
  removeHead() {
    if (this.head === null) {
      this.tail = null;
      return null;
    }
    const headNode = this.head;
    this.head = this.head.next;
    return headNode.value;
  }
  // Checks the linked list for the given value
  // Returns true if the the value is found in the list, false otherwise
  contains(value) {
    let searchNode = this.head;
    while (searchNode !== null) {
      if (searchNode.value === value) {
        return true;
      }
      searchNode = searchNode.next;
    }
    return false;
  }
}

module.exports = LinkedList;
