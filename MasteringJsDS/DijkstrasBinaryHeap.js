class Node {
	constructor(val, priority) {
		this.val = val;
		this.priority = priority;
	}
}

class PriorityQueue {
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

class WeightedGraph {
	constructor() {
		this.adjList = {};
	}

	addVertex(node) {
		if (!this.adjList[node]) return (this.adjList[node] = []);
	}

	addEdge(v1, v2, weight) {
		this.adjList[v1].push({ node: v2, weight });
		this.adjList[v2].push({ node: v1, weight });
	}

	dijkstra(v1, v2) {  //(startingNode, endNode)
		const nodes = new PriorityQueue(),
			dist = {},
			prev = {};
		let smallest,
			path = [];

		// build initial state for distance (dist)
		for (let vtx in this.adjList) {
			if (vtx === v1) {
				dist[vtx] = 0;
				nodes.enqueue(vtx, 0);
			} else {
				dist[vtx] = Infinity;
				nodes.enqueue(vtx, Infinity);
			}
			prev[vtx] = null;
		}

		// as long as there is something to visit
		while (nodes.values.length) {
			smallest = nodes.dequeue().val;

			if (smallest === v2) {
				//done and return shortest path
				while (prev[smallest]) {
					path.push(smallest);
					smallest = prev[smallest];
				}
				break;
			}

			if (smallest || dist[smallest] !== Infinity) {
				for (let neighbor in this.adjList[smallest]) {
					let nextNode = this.adjList[smallest][neighbor],
						candidate = dist[smallest] + nextNode.weight,
						nextNeighbor = nextNode.node; //to compare weight values

					if (candidate < dist[nextNeighbor]) {
						dist[nextNeighbor] = candidate;
						prev[nextNeighbor] = smallest;
						nodes.enqueue(nextNeighbor, candidate);
					}
				}
			}
		}
		return [...path, smallest].reverse();
	}
}

var graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);
console.log(graph.dijkstra("A", "E")); 
// graph.dijkstra("A", "E"); //shortest path

console.log(graph);
