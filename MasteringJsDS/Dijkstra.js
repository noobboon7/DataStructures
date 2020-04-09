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
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
// g.addEdge()

console.log(g);