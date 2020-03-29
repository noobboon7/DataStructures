class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}
// LIFO (Last In First Out)
class Stack {
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val){
    let newNode = new Node(val),
    cur;

    if(!this.first){
      this.first = newNode;
      this.last = newNode;
    }else{
      cur = this.first;
      this.first = newNode;
      this.first.next = cur;
    }
    return ++this.size;
  }

  pop(){
    if(!this.first) return null;
    
    let cur = this.first;

    if(this.first === this.last){
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return cur.value;
  }
}

// const stack = new Stack();

// stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.pop();
// stack.pop();
// stack.pop();
// console.log(stack);

////////////////////////////////////////////// QUEUES///////////////////////////////////
// FIFO (First In First Out)

class Queue{
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val){
    let newNode = new Node(val);
    if(!this.first){
      this.first = newNode;
      this.last = newNode;
    }else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue(){
    if(!this.first) return null;

    let rvm = this.first;

    if(this.first === this.last){
      this.first = null;
			this.last = null;
    }else {
      this.first = this.first.next; 
    }
    this.size--;
    return rvm.value;
  }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue();
queue.dequeue();
queue.dequeue();
console.log(queue);