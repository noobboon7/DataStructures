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
    this.shiftItem(idx)
  }
  shiftItems(idx){
    for (let i = idx; i < this.length - 1; i++) {
      this.data[i] = this.data[i+1];
    }
    // delete this.data[this.length - 1]
  }
}

const list = new Aarray();
list.push('hello');
list.push('world');
list.push('!!!');
// list.pop();
list.delete(2)
console.log(list);