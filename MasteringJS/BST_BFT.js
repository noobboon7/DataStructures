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
// console.log(tree.DFS());

console.log(tree);