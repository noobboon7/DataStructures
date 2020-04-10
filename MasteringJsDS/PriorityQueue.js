class Node {
  constructor(val, priority){
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {   //MinBinaryHeap
	constructor() {
		this.values = [];
	}

	enqueue(val, priority) {
		const newNode = new Node(val, priority);
		this.values.push(newNode);
		this.bubbleUp();
	}

	bubbleUp() {
		let idx = this.values.length - 1;
		const node = this.values[idx];

		while (idx > 0) {
			let parentIdx = Math.floor((idx - 1) / 2),
				parnt = this.values[parentIdx];

			if (node.priority >= parnt.priority) break;
			this.values[parentIdx] = node;
			this.values[idx] = parnt;
			idx = parentIdx;
		}
	}

	dequeue() {
		const min = this.values[0],
			end = this.values.pop();

		if (this.values.length > 0) {
			this.values[0] = end;
			this.bubbleDown();
		}
		return min;
	}

	bubbleDown() {
		let idx = 0;
		const len = this.values.length,
			el = this.values[0];

		while (true) {
			let lChldIdx = 2 * idx + 1,
				rChldIdx = 2 * idx + 2,
				leftChld,
				rightChld,
				swap = null;

			if (lChldIdx < len) {
				leftChld = this.values[lChldIdx];
				if (leftChld.priority < el.priority) {
					swap = lChldIdx;
				}
			}
			if (rChldIdx < len) {
				rightChld = this.values[rChldIdx];
				if (
					(!swap && rightChld.priority < el.priority) ||
					(swap && rightChld.priority < leftChld.priority)
				) {
					swap = rChldIdx;
				}
			}
			if (!swap) break;
			this.values[idx] = this.values[swap];
			this.values[swap] = el;
			idx = swap;
		}
	}
}

const heap = new PriorityQueue();
heap.enqueue("fever", 2);
heap.enqueue('sneeze',1);
heap.enqueue('scrape',1);
heap.enqueue('cold',3);
heap.enqueue('flu',4);
heap.enqueue('covid19',6);
heap.dequeue();



console.log(heap);