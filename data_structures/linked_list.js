class LinkedList {
  _nodes = [];
  add(n) {
    this._nodes.push(n);
  }
  show() {
    console.log('Linked List: ' + JSON.stringify(this._nodes));
  }
  get(item) {
    return JSON.stringify(this._nodes[this._nodes.indexOf(item)]);
  }
  previous(item) {
    return this._nodes.indexOf(item).length - 1 < 0
      ? false
      : JSON.stringify(this._nodes[this._nodes.indexOf(item) - 1]);
  }
  next(item) {
    return this._nodes.indexOf(item).length + 1 >
      this._nodes.indexOf(item).length
      ? false
      : JSON.stringify(this._nodes[this._nodes.indexOf(item) + 1]);
  }
  last() {
    return this._nodes.filter((v) => v.next === null)[0];
  }
  remove(item) {
    //
  }
}

class Node {
  data = null;
  next = null;
  constructor(d, nx) {
    this.data = d;
    this.next = nx;
  }
}

// Create linked list
let ll = new LinkedList();

// Create Nodes
let node4 = new Node('Victor', null);
let node3 = new Node('Paulo', node4);
let node2 = new Node('Jose', node3);
let node1 = new Node('Maria', node2);

// Add nodes
ll.add(node1);
ll.add(node2);
ll.add(node3);
ll.add(node4);

// Show values
console.log('=============');
console.log('=============');
ll.show();
console.log('=============');
console.log('=============');
console.log('get: ' + ll.get(node2));
console.log('=============');
console.log('previous: ' + ll.previous(node2));
console.log('=============');
console.log('next: ' + ll.next(node2));
console.log('=============');
console.log('last: ' + JSON.stringify(ll.last()));

ll.remove();
