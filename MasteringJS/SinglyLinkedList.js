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
}

const list = new SinglyLinkedList();

list.push(10);
list.push(11);
list.push(12);
list.push(13);
list.pop();
console.log(list) ;
