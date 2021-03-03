class Node{
    constructor(value){
        // a Node starts with a given data property
        // a Node also has a .next property initialized as null
      this.data = value;
      this.next = null;
    }
}

class LinkedList{
    constructor(){
    // a Linked List starts with a "head" property intialized as null
      this.head = null;
    }
    appendNode(data){
     // creates a new node with the given data and adds it to back of the list
      if (this.head === null) {
        this.head = new Node(data);
        return;
      }
      let currentNode = this.head
      while (currentNode && currentNode.next) {
        currentNode = currentNode.next
      }
      currentNode.next = new Node(data);

    }
    prependNode(data){
        // creates a new node with the given data and adds it to the front of the list
      const originalHead = this.head;
      this.head = new Node(data);
      this.head.next = originalHead;
    }
    pop(){
      // returns null if the list is empty
     if (this.head === null) {
       return null;
     }
     let secondLastNode = this.head
     // check if the list contains only one element and return it
     if (secondLastNode.next === null) {
       const lastNode = secondLastNode;
       this.head = null;
       return lastNode;
     }
     // loops through the list to find the second last item
     while (secondLastNode.next.next !== null) {
       secondLastNode = secondLastNode.next
     }
     // removes the last node from the list and returns it
     const lastNode = secondLastNode.next;
     secondLastNode.next = null;
     return lastNode;
    }
    removeFromFront(){
      if (!this.head) {
        return null;
      }
        // remove the head node from the list and return it
      const firstNode = this.head;
        // the next node in the list is the new head node
      this.head = this.head.next;
      return firstNode;
    }
    insertAt(X, data){
        // insert a new node into the list with the given data
        // place it after X nodes in the list
      let currentNode = this.head;
       if (X === 0) {
        this.head =  new Node(data);
        this.head.next = currentNode;
      }
      for (let i = 1; i < X; i++) {
        if (currentNode.next) {
          currentNode = currentNode.next;
        } else {
          currentNode.next = new Node(data);
          return;
        }
      }
      const nextNode = currentNode.next;
      currentNode.next.data = data;
      currentNode.next.next = nextNode;
        // if X exceeds the bounds of the list, put the node at the end
        // insertAt(0, 7) would add the new node as the head
    }
    removeAt(X){
         // remove the Xth node from the list, considering 0 to be the first node
        if (X === 0) {
          return this.removeFromFront();
        }
        let priorNode = this.head;
        for (let i = 1; i < X - 1; i++) {
          priorNode = priorNode.next;
        }
        const removedNode = priorNode.next;
        const nextNode = priorNode.next.next;
        priorNode.next = nextNode;
        // return the node that has been removed
        return removedNode;
    }
    search(data){
        // searches the list for a node with the given data
        let currentNode = this.head
        let index = 0;
        while (currentNode) {

          if (currentNode.data === data) {
            // if it is found, return the "index" of the node, considering 0 to be the first node

            return index;
          }

          currentNode = currentNode.next;
          index++;
        }
        // if not, return false
        return false;
    }
    sort(){
    // sort the Linked List in ascending order of data values
      let swapHappened = true;
      while (swapHappened) {
        swapHappened = false;
        let currentNode = this.head;
        while (currentNode.next) {
          if (currentNode.data > currentNode.next.data) {
            const higherValue = currentNode.data;
            const lowerValue = currentNode.next.data;
            currentNode.data = lowerValue;
            currentNode.next.data = higherValue;
            swapHappened = true;
          }
          currentNode = currentNode.next;
       }
     }
   }
}

module.exports = {
    Node,
    LinkedList
}
