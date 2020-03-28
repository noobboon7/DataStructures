class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(val) {
		let newNode = new Node(val);

		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			newNode.prev = this.tail;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}

	pop() {
		if (!this.head) return undefined;
		let oldTail = this.tail;

		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.tail = oldTail.prev;
			this.tail.next = null;
			oldTail.prev = null;
		}
		this.length--;
		return oldTail;
	}

	shift() {
		if (!this.head) return undefined;
		let oldHead = this.head;

		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = oldHead.next;
			this.head.prev = null;
			oldHead.next = null;
		}
		this.length--;
		return oldHead;
	}

	unshift(val) {
		let newNode = new Node(val);

		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.head.prev = newNode;
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
		return this;
	}

	get(idx) {
		if (idx < 0 || idx >= this.length) return null;
		let count, cur;

		if (idx <= this.length / 2) {
			console.log("starting from head");
			count = 0;
			cur = this.head;
			while (count < idx) {
				count++;
				cur = cur.next;
			}
		} else {
			console.log("starting from tail");
			count = this.length - 1;
			cur = this.tail;
			while (count !== idx) {
				count--;
				cur = cur.prev;
			}
		}
		return cur;
	}

	set(idx, val) {
		let node = this.get(idx);
		return node ? ((node.val = val), true) : false;
	}

	insert(idx, val) {
		if (idx < 0 || idx >= this.length) return false;

		let prevNode = this.get(idx - 1),
			nextNode = prevNode.next,
			newNode = new Node(val);

		if (idx === 0) {
			this.unshift(newNode);
		} else if (idx === this.length) {
			this.push(newNode);
		} else {
			prevNode.next = newNode;
			nextNode.prev = newNode;
			newNode.prev = prevNode;
			newNode.next = nextNode;
		}
		this.length++;
		return true;
	}
}
const list = new DoublyLinkedList();

list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
list.push(7);
list.push(8);
list.push(9);
// list.pop();
// list.pop();
// list.shift();
list.unshift(0);
// console.log(list.get(7));
// console.log(list.set(1, 'Hello'));
list.insert(1, "helloNode");
console.log(list);
