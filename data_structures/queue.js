class Queue {
  _queue = [];
  add(item) {
    this._queue.push(item);
  }
  process() {
    this._queue.shift();
  }
  size() {
    return this._queue.length;
  }
  isEmpty() {
    return this._queue.length === 0;
  }
  show() {
    console.log(this._queue);
  }
}

const q = new Queue();
// add to queue
q.add('maria');
q.add('jose');
q.add('evandro');
q.add('carlos');
q.add('felipe');
q.add('roberto');

// process
q.process();
q.show();

// show size
console.log(q.size());

// show empty?
console.log(q.isEmpty());
