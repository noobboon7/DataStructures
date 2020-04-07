class Graph {
  constructor(){
    this.adjList = {};
  }

  addVertex(vtx){
    if(!this.adjList[vtx]) this.adjList[vtx] = [];
  }
}
const g = new Graph();

g.addVertex("NYC");
g.addVertex("NYC");

console.log(g);
//////////////////////////////////// NOTES////////////////////////////////////
// there are adjacency list that are composed using key values pairs, {A: [egd1,edg2]}
// key === arrays of edges & values === the node or vertex : hash maps

//ADJACENCY MATRIX is a 2 dementional structure e.g. nested arrays [[],[],[]]
////////////////////////////////////////////////////////////////////////