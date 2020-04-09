// this is the first implementation of this algo with a naive version of a priorityQueue 
// BigO is for the PriorityQueue is going to be O(N * log(N))
class PriorityQueue{
  constructor(){
    this.values =[];
  }

  enqueue(val, priority){
    this.values.push({val, priority})
    this.sort();
  }

  dequeue(){
    return this.values.shift();
  }

  sort(){
    this.values.sort((a,b) => a.priority - b.priority);
  }
}
class WeightedGraph {
  constructor(){
    this.adjList = {};
  }

  addVertex(node){
    if(!this.adjList[node]) return this.adjList[node] = [];
  }

  addEdge(v1,v2, weight){
    this.adjList[v1].push({node:v2, weight});
    this.adjList[v2].push({node:v1, weight});
  }

}

const g = new WeightedGraph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addEdge("A","B", 9);
g.addEdge("A","C", 5);
g.addEdge("B","C", 5);

console.log(g);