class Node{
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree{
  constructor(){
    this.root = null;
  }

  insert(val){
    const newNode = new Node(val);

    if(!this.root){
      this.root = newNode;
      return this;
    }else {
      let cur = this.root;
      while(true) {
        if(val === cur.value) return undefined;
          if(val < cur.value){
            if(!cur.left){
              cur.left = newNode;
              return this;
            } 
            cur = cur.left;
          } else {
              if(!cur.right){
                cur.right = newNode;
                return this;
              }
              cur = cur.right;
          }
        }
    }
  } 

  find(val){ 
    if(!this.root) return false;

    let cur = this.root,
    found =false;
    
    while(cur && !found){
      if(val < cur.value){
        cur = cur.left;
      } else if(val > cur.value){
        cur =cur.right;
      }else {
        found = true;
      }
    }
    return !found ? undefined : cur;
  }

  contains(val){

  }

}

const tree  = new BinarySearchTree();
tree.insert(10);
tree.insert(15);
tree.insert(5);
tree.insert(16);
tree.insert(3);
tree.insert(6);
tree.find(3);
// console.log(tree.insert(6))
// tree.insert(3);
// tree.root = new Node(10);
// tree.root.right = new Node(15);
// tree.root.left = new Node(7);
// tree.root.left.right = new Node(9);

console.log(tree);
