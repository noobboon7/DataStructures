class Aarray {
  constructor(){
    this.length = 0;
    this.data = {};
  }

  get(idx){
    return this.data[idx];
  }

  push(item){
    this.data[this.length] = item;
    this.length++;
  }

  pop(){
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(idx){
    const item =this.data[idx];
    
  }
}

const list = new Aarray();
list.push('hello');
list.push('world');
list.push('!!!');
list.pop();
console.log(list);