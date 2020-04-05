class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	insert(val) {
		const newNode = new Node(val);

		if (!this.root) {
			this.root = newNode;
			return this;
		} else {
			let cur = this.root;
			while (true) {
				if (val === cur.value) return undefined;
				if (val < cur.value) {
					if (!cur.left) {
						cur.left = newNode;
						return this;
					}
					cur = cur.left;
				} else {
					if (!cur.right) {
						cur.right = newNode;
						return this;
					}
					cur = cur.right;
				}
			}
		}
	}

	find(val) {
		if (!this.root) return false;

		let cur = this.root,
			found = false;

		while (cur && !found) {
			if (val < cur.value) {
				cur = cur.left;
			} else if (val > cur.value) {
				cur = cur.right;
			} else {
				found = true;
			}
		}
		return !found ? undefined : cur;
	}

	contains(val) {
		if (!this.root) return false;

		let cur = this.root,
			found = false;

		while (cur && !found) {
			if (val < cur.value) {
				cur = cur.left;
			} else if (val > cur.value) {
				cur = cur.right;
			} else {
				return true;
			}
		}
		return false;
  }
  
  BFS(){             //Breath frist search 
    let queue = [],
        visited = [],
				cur = this.root;
				
    queue.push(cur);

    while(queue.length){
      cur = queue.shift();
      visited.push(cur);
      if(cur.left) queue.push(cur.left);
      if(cur.right) queue.push(cur.right);
    }
    return visited;
  }

  DFSPreOrder(){        //Depth first search -- PreOrder 
    let data = [];      //moves all the way down one branch then the next in order 

    function traverse(node){
      data.push(node);
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right); 
    }
     
    traverse(this.root);
    return data;
	}

  DFSPostOrder(){        //Depth first search -- PostOrder
    let data = [];      			//moves all the way down one side of a branch and 
															//add the ends of the branch first and then
    function traverse(node){   //the moves back up the branch adding the node going up to the root      		
			if(node.left) traverse(node.left);		
      if(node.right) traverse(node.right); 	
      data.push(node);
    }
     
    traverse(this.root);
    return data;
	}
	
	DFSInOrder(){  			//Depth first search -- InOrder 
		let data = [];    //starting from bottom branch, gets all nodes from left, then right   

		function traverse(node){       		
			if(node.left) traverse(node.left);		
			data.push(node);
			if(node.right) traverse(node.right); 	
		}
		traverse(this.root);
		return data;
	}
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(15);
tree.insert(5);
tree.insert(16);
tree.insert(3);
tree.insert(11);
tree.insert(12);
tree.insert(20);
tree.insert(23);
tree.insert(2);
tree.insert(7);
// console.log(tree.BFS());
console.log(tree.DFSInOrder());

console.log(tree);