class Stack {
  _stack = [];
  add(item) {
    return this._stack.push(item);
  }
  process() {
    this._stack.pop();
  }
  size() {
    return this._stack.length;
  }
  isEmpty() {
    return this._stack.length === 0;
  }
  show() {
    console.log(this._stack);
  }
}

const s = new Stack();

// add
s.add(1);
s.add(2);
s.add(3);
s.add(4);

// show
s.show();

// process
s.process();
s.process();

// show
s.show();
