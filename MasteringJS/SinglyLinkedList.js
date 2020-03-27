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

  set(idx, val){
    let setNode = this.get(idx);
    return setNode ? setNode.val = val : false;
  }

  insert(idx, val){
    if(idx < 0 || idx > this.length) return false;
    if(idx === this.length) return !!this.push(val);
    if(idx === 0) return !!this.unshift(val);
    
    let newNode = new Node(val),
    prevNode = this.get(idx - 1),
    temp = prevNode.next;

    prevNode.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  remove(idx){
    if (idx < 0 || idx >= this.length) return undefined;
    if (idx === this.length - 1) return this.pop();
    if (idx === 0) return this.shift();

    let prev = this.get(idx -1),
      rmvd = prev.next;

    prev.next = rmvd.next;
    this.length--;
    return rmvd;
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
// console.log(list.insert(1, "Hello"));
// console.log(list.remove(5));
// console.log(list.remove(1));


console.log(list);
