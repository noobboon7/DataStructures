class MaxBinaryHeap {
	constructor() {
		this.values = [];
	}

	insert(val) {
		this.values.push(val);
		this.bubbleUp();
	}
	bubbleUp() {
		let idx = this.values.length - 1;
		const el = this.values[idx];

		while (idx > 0) {
			let parentIdx = Math.floor((idx - 1) / 2),
				parnt = this.values[parentIdx];

			if (el <= parnt) break;
			this.values[parentIdx] = el;
			this.values[idx] = parnt;
			idx = parentIdx;
		}
	}
  
  extractMax() {
    const max = this.values[0],
          end = this.values.pop();
    if(this.values.length > 0){
      this.values[0] = end; 
      this.bubbleDown();
    }
    return max;
  }

  bubbleDown(){
    let idx = 0;
    const len = this.values.length,
          el = this.values[0];

    while(true){
      let lChldIdx = 2 * idx + 1,
          rChldIdx = 2 * idx + 2,
          leftChld, rightChld,
          swap = null;

      if(lChldIdx < len){
        leftChld = this.values[lChldIdx];
        if(leftChld > el){
          swap = lChldIdx;
        }
      }
      if(rChldIdx < len){
        rightChld = this.values[rChldIdx];
        if((!swap && rightChld > el) || (swap && rightChld > leftChld)){
          swap = rChldIdx;
        }
      }
      if(!swap) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = el;
      idx = swap;
    }
  }

	print() {
		console.log(this.values);
		let arrIdx = [];
		for (let i in this.values) {
			arrIdx.push(parseInt(i));
		}
		console.log(arrIdx);
	}
}
const heap = new MaxBinaryHeap();

// heap.insert(Math.floor(Math.random() * 100 + 1));
// heap.insert(Math.floor(Math.random() * 100 + 1));
// heap.insert(Math.floor(Math.random() * 100 + 1));
// heap.insert(Math.floor(Math.random() * 100 + 1));
// heap.insert(Math.floor(Math.random() * 100 + 1));
// heap.insert(Math.floor(Math.random() * 100 + 1));
// heap.insert(Math.floor(Math.random() * 100 + 1));
heap.insert(55);
heap.insert(12);
heap.insert(27);
heap.insert(18);
heap.insert(39);
heap.insert(33);
heap.insert(41);
heap.insert(199);
heap.insert(1);
heap.insert(45);
heap.extractMax();

heap.print();
// console.log(heap);