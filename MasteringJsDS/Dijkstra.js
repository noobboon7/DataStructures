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

  dijkstra(v1,v2){   //(startingNode, endNode)
    const nodes = new PriorityQueue(),
          dist = {},
          prev = {};
    let smallest,
			  path = [];

    // build initial state for distance (dist)
    for(let vtx in this.adjList){
      if(vtx === v1){
        dist[vtx] = 0;
        nodes.enqueue(vtx, 0);
      }else{
        dist[vtx] = Infinity;
        nodes.enqueue(vtx, Infinity);
      }
      prev[vtx] = null;
    }

    // as long as there is something to visit
    while(nodes.values.lenght){
      smallest = nodes.dequeue().val;
      if(smallest === v2){       //done and return shortest path 
        while(prev[smallest]){
          path.push(smallest);
          smallest = prev[smallest];
        }
        break;
      } 

      if(smallest || dist[smallest] !== Infinity){
        for(let neighbor in this.adjList[smallest]){
          let nextNode = this.adjList[smallest][neighbor],
						candidate = dist[smallest] + nextNode.weight,
						nextNeighbor = nextNode.node; //to compare weight values

          if(candidate < dist[nextNeighbor]){
            dist[nextNeighbor] = candidate;
            prev[nextNeighbor] = smallest;
            nodes.enqueue(nextNeighbor, candidate);
          }

        }
      }
    }
    console.log(path);
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
graph.dijkstra("A", "E"); //shortest path 

console.log(graph);