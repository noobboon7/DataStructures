class Graph {
	constructor() {
		this.adjList = {};
	}

	addVertex(vtx) {
		if (!this.adjList[vtx]) this.adjList[vtx] = [];
	}

	addEdge(v1, v2) {
		//add edgecage is v1 || v2 exsists
		this.adjList[v1].push(v2);
		this.adjList[v2].push(v1);
	}

	removeEdge(v1, v2) {
		this.adjList[v1] = this.adjList[v1].filter((vtx) => vtx !== v2);
		this.adjList[v2] = this.adjList[v2].filter((vtx) => vtx !== v1);
	}

	removeVertex(vtx) {
		while (this.adjList[vtx].length) {
			let adjVtx = this.adjList[vtx].pop();
			this.removeEdge(vtx, adjVtx);
		}
		delete this.adjList[vtx];
	}

	DFSRecursive(start) {
		let visited = {},
			result = [];
		const adjList = this.adjList;

		(function DFS(vertex) {
			if (!vertex) return null;

			visited[vertex] = true;
			result.push(vertex);

			adjList[vertex].forEach((neighbor) => {
				if (!visited[neighbor]) return DFS(neighbor);
			});
		})(start);

		return result;
	}

	DFSIterative(start) {
		let s = [start],
    visited = {},
    results = [],
    vtx;
    
    while (s.length) {
      vtx = s.pop();
			visited[vtx] = true;
      results.push(vtx);
      
			this.adjList[vtx].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          s.push(neighbor);
        }
      });
    }
    return results;
  }
  
  BFSRecursive(start){
    let queue =[start],
        result = [],
        visited ={},
        vtx;
    visited[start] = true;

    while(queue.length){
      vtx = queue.shift();
      result.push(vtx);
      
      this.adjList[vtx].forEach(neighbor =>{
        if(!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }
}
const g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
// console.log(g.DFSRecursive("A"));
// console.log(g.DFSIterative("A"));
console.log(g.BFSRecursive("A"));
// g.addVertex("NYC");
// g.addVertex("Hawaii");
// g.addVertex("Tokyo");
// g.addEdge("NYC", "Hawaii");
// g.addEdge("Hawaii", "Tokyo");
// g.addEdge("NYC", "Tokyo");
// g.removeEdge("NYC", "Tokyo");
// g.removeVertex("Hawaii");

console.log(g);
//////////////////////////////////// NOTES////////////////////////////////////
// there are adjacency list that are composed using key values pairs, {A: [egd1,edg2]}
// key === arrays of edges & values === the node or vertex : hash maps

//ADJACENCY MATRIX is a 2 dementional structure e.g. nested arrays [[],[],[]]
////////////////////////////////////////////////////////////////////////
