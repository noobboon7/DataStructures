class Graph {
  constructor(){
    this.adjList = {};
  }

  addVertex(vtx){
    if(!this.adjList[vtx]) this.adjList[vtx] = [];
  }

  addEdge(v1,v2){
    //add edgecage is v1 || v2 exsists 
    this.adjList[v1].push(v2);
    this.adjList[v2].push(v1);
  }

  removeEdge(v1,v2){
    this.adjList[v1] = this.adjList[v1].filter(vtx => vtx !== v2);
    this.adjList[v2] = this.adjList[v2].filter(vtx => vtx !== v1);
  }

  removeVertex(vtx){
    while(this.adjList[vtx].length){
      let adjVtx = this.adjList[vtx].pop();
      this.removeEdge(vtx, adjVtx);
    }
    delete this.adjList[vtx];
  }
}
const g = new Graph();

g.addVertex("NYC");
g.addVertex("Hawaii");
g.addVertex("Tokyo");
g.addEdge("NYC", "Hawaii");
g.addEdge("Hawaii", "Tokyo");
g.addEdge("NYC", "Tokyo");
// g.removeEdge("NYC", "Tokyo");
g.removeVertex("Hawaii");

console.log(g);
//////////////////////////////////// NOTES////////////////////////////////////
// there are adjacency list that are composed using key values pairs, {A: [egd1,edg2]}
// key === arrays of edges & values === the node or vertex : hash maps

//ADJACENCY MATRIX is a 2 dementional structure e.g. nested arrays [[],[],[]]
////////////////////////////////////////////////////////////////////////