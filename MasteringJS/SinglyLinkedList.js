class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val){
    const newNode = new Node(val);
    if(!this.head){
      this.head = newNode;
      this.tail = this.head;
    }else{
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }


  pop(){
    if(!this.head) return undefined;

    let current = this.head,
    newTail = current;

    while(current.next){
      newTail = current;
      current = current.next;
    } 

    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if(this.length === 0){
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift(){
    let curHead =this.head;
    if(!curHead) return undefined;

    this.head = curHead.next;
    this.length--;
    if (this.length === 0) {
			this.tail = null;
		}
    return curHead;
  }

  unshift(val){
    let newNode = new Node(val);
    
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(idx){
    if(idx < 0 || idx >= this.length) return null;

    let count = idx,
    curNode = this.head;

    while(count > 0){
      count--;
      curNode = curNode.next;
    }
    return curNode;
  }

  set(val, idx){
    let setNode = this.get(idx);
    return setNode ? setNode.val = val : false;
  }

}

const list = new SinglyLinkedList();

list.push(10);
list.push(11);
list.push(12);
list.push(13);
list.pop();
list.shift();
list.unshift(7);
list.push(14);
list.push(15);
list.push(16);
// list.get(4);
console.log(list.set("hello", 7));


console.log(list);
