
const Stack = require('./Stack.js')
const Queue = require('./Queue.js')

//Graphs

/**
 * 
 * Directed vs Undirected
 * Weighted vs Unweighted (cost)
 * 
 * Applications
 *  Social Networks, Google Maps, Recomendation Systeem
 
Two ways to make Graphs
  - Using Adjacency Matric
  - Using Adjacency List *
*/

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addvertex(vertex) {
    //create a vertex if it doesn't exist
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(v1, v2) {
    if (!this.adjacencyList[v1]) {
      this.addvertex(v1);
    }

    if (!this.adjacencyList[v2]) {
      this.addvertex(v2);
    }

    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1); // having this line makes graph undirected
  }

  dfs(start) {
    const stack = new Stack();
    stack.push(start);

    const visited = {};

    while (!stack.isEmpty()) {
      const vertex = stack.pop();

      if (!visited[vertex]) {
        visited[vertex] = true;
        console.log(vertex); //here we do some processing as required

        //add neighbours to stack
        for (let neighbour of this.adjacencyList[vertex]) {
          if (!visited[neighbour]) {
            stack.push(neighbour);
          }
        }
      }
    }
  }

  bfs(start) {
    const queue = new Queue();
    queue.enqueue(start);

    let visited = {};

    while (!queue.isEmpty()) {
      let vertex = queue.dequeue();

      if (!visited[vertex]) {
        visited[vertex] = true;
        console.log(vertex);

        for(let neighbour of this.adjacencyList[vertex]){
          if(!visited[vertex]){
            queue.enqueue(vertex)
          }
        }
      }
    }
  }

  printGraph(){
    for(let vertex in this.adjacencyList){
      console.log(vertex + ' -> ' + this.adjacencyList[vertex].join(", "))
    }
  }
}

console.log("----Graph-----")
const graph = new Graph()

graph.addEdge("A", "B")
graph.addEdge("A", "C")
graph.addEdge("B", "D")

console.log("dfs: ")
graph.dfs("A")

console.log("bfs: ")
graph.bfs("A")

console.log("Graph: ")
graph.printGraph()