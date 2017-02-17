function Queue() {
    this.dataStore = [];
    this.enqueue = function (element) {
        this.dataStore.push(element);
    };
    this.dequeue = function () {
        return this.dataStore.shift();
    };
    this.front = function () {
        return this.dataStore[0];
    };
    this.back = function () {
        return this.dataStore[this.dataStore.length - 1];
    };
    this.toString = function () {
        var retStr = "";
        for (var i = 0; i < this.dataStore.length; ++i) {
            retStr += this.dataStore[i] + "\n";
        }
        return retStr;
    };
    this.isEmpty = function () {
        if (this.dataStore.length == 0) {
            return true;
        }
        else {
            return false;
        }
    }
}

function PriorityQueue () {
  this._nodes = [];

  this.enqueue = function (priority, key) {
    this._nodes.push({key: key, priority: priority });
    this.sort();
  }
  this.dequeue = function () {
    return this._nodes.shift().key;
  }
  this.sort = function () {
    this._nodes.sort(function (a, b) {
      return a.priority - b.priority;
    });
  }
  this.isEmpty = function () {
    return !this._nodes.length;
  }
}

function Dictionary() {
    this.datastore = {};
    this.add = function add(key, value) {
        this.datastore[key] = value;
    };
    this.find = function find(key) {
        return this.has(key) ? this.datastore[key] : undefined;
    }

    this.remove = function remove(key) {
        if (this.find(key)) {
            delete this.datastore[key];
            return true;
        }
        return false;
    };
    this.traverse = function traverse(action) {
        for (var key in this.datastore) {
            action(key, this.datastore[key]);
        }
    };
    this.count = function count() {
        return Object.getOwnPropertyNames(pbook.datastore).length;
    };
    this.clear = function clear() {
        for (var key in this.datastore) {
            delete this.datastore[key];
        }
    };
    this.has = function (key) {
        return this.datastore.hasOwnProperty(key);
    };
    this.traverseSort = function traverseSort(action) {
        var items = Object.getOwnPropertyNames(pbook.datastore).sort();
        for (var index = 0; index < items.length; index++) {
            action(items[index], this.datastore[items[index]]);
        }
    };
}

function Graph() {
    this.vertices = [];
    this.edges = new Dictionary();
    this.addVertex = function (vertex) {
        this.vertices.push(vertex);
        this.edges.add(vertex, []);
    };
    this.addEdge = function (vertexFrom, vertexTo, cost) {
        if ((this.edges.has(vertexFrom)) && (this.edges.has(vertexTo))) {
            this.edges.datastore[vertexFrom].push(vertexTo);
            this.edges.datastore[vertexTo].push(vertexFrom);
        }
    };
    this.removeVertex = function (vertex) {
        // remove edges
        for (var vert1 in edges.datastore[vertex]) {
            removeEdge(vert1, vertex);
        }
        edges.remove(vertex);

        // remove vertex
        var index = vertices.indexOf(vertex);
        vertices.splice(index, 1);
    };

    this.removeEdge = function (vertexFrom, vertexTo) {
        if ((edges.has(vertexFrom)) && (edges.has(vertexTo))) {
            var index = edges.datastore[vertexFrom].indexOf(vertexTo);
            edges.datastore[vertexFrom].splice(index, 1);

            index = edges.datastore[vertexTo].indexOf(vertexFrom);
            edges.datastore[vertexTo].splice(index, 1);
        }
    };

    this.printData = function () {
        console.log("Vertices -------------------");
        for (var item in this.vertices) {
            console.log(this.vertices[item]);
        }
        console.log("Edges -------------------");
        this.edges.traverse(function (key, value) {
            console.log(key + "--->", value);
        });
    }

    this.bfs = function (v, action) {
        var colors = new Dictionary();
        for (var item in this.vertices) {
            colors.add(this.vertices[item], "white");
        }

        var queue = new Queue();
        queue.enqueue(v);

        while (!queue.isEmpty()) {
            var vertex = queue.dequeue();
            // додати всі білі вершини до черги і позначити їх сірими
            var neighbours = this.edges.datastore[vertex];
            for (var index in neighbours) {
                if (colors.find(neighbours[index]) === "white") {
                    queue.enqueue(neighbours[index]);
                    colors.add(neighbours[index], "grey");
                }
            }
            // обробити вершину
            action(vertex);
            // позначити вершину чорною
            colors.add(vertex, "black");
        }
    }

    this.ShortestWay = function (v) {
        var color = initializeColor(),
            queue = new Queue(),
            d = [], 
            pred = [];
        queue.enqueue(v);
        for (var i = 0; i < vertices.length; i++) {
            d[vertices[i]] = 0; 
            pred[vertices[i]] = null;
        }
        while (!queue.isEmpty()) {
            var u = queue.dequeue(),
                neighbors = adjList.get(u);
            color[u] = 'grey';
            for (i = 0; i < neighbors.length; i++) {
                var w = neighbors[i];
                if (color[w] === 'white') {
                    color[w] = 'grey';
                    d[w] = d[u] + 1; 
                    pred[w] = u; 
                    queue.enqueue(w);
                }
            }
            color[u] = 'black';
        }
        return { //{8}
            distances: d,
            predecessors: pred
        };
    };

    this.shortestPath = function (start, finish) {
    var nodes = new PriorityQueue(),
        distances = {},
        previous = {},
        path = [],
        smallest, vertex, neighbor, alt;

    for(vertex in this.vertices) {
      if(vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(0, vertex);
      }
      else {
        distances[vertex] = INFINITY;
        nodes.enqueue(INFINITY, vertex);
      }

      previous[vertex] = null;
    }

    while(!nodes.isEmpty()) {
      smallest = nodes.dequeue();

      if(smallest === finish) {
        return path;

        while(previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }

        break;
      }

      if(!smallest || distances[smallest] === INFINITY){
        continue;
      }

      for(neighbor in this.vertices[smallest]) {
        alt = distances[smallest] + this.vertices[smallest][neighbor];

        if(alt < distances[neighbor]) {
          distances[neighbor] = alt;
          previous[neighbor] = smallest;

          nodes.enqueue(alt, neighbor);
        }
      }
    }

    return path;
  }

    this.dfs = function (action) {
        var colors = new Dictionary();
        for (var item in this.vertices) {
            colors.add(this.vertices[item], "white");
        }
        for (var index in this.vertices) {
            if (colors.find(this.vertices[index]) === "white")
                this.dfsVisit(this.vertices[index], colors, action);
        }
    }
    this.dfsVisit = function (u, clr, action) {
        clr.add(u, "grey");
        action(u);
        var neighbours = this.edges.datastore[u];
        for (var index in neighbours) {
            if (clr.find(neighbours[index]) === "white") {
                this.dfsVisit(neighbours[index], clr, action);
            }
        }
        clr.add(u, "black");
    }
}

var graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addVertex("G");
graph.addVertex("H");
//graph.printData();
graph.addEdge("1", "2");
graph.addEdge("1", "7");
graph.addEdge("1", "8");

graph.addEdge("2", "3");
graph.addEdge("2", "6");

graph.addEdge("3", "4");
graph.addEdge("3", "5");

graph.addEdge("8", "9");
graph.addEdge("8", "12");

graph.addEdge("9", "10");
graph.addEdge("9", "11");

//graph.printData();
graph.dfs(function (item) {
    console.log(item);
});




/**


g.addVertex('A', {B: 7, C: 8});
g.addVertex('B', {A: 7, F: 2});
g.addVertex('C', {A: 8, F: 6, G: 4});
g.addVertex('D', {F: 8});
g.addVertex('E', {H: 1});
g.addVertex('F', {B: 2, C: 6, D: 8, G: 9, H: 3});
g.addVertex('G', {C: 4, F: 9});
g.addVertex('H', {E: 1, F: 3});

// Log test, with the addition of reversing the path and prepending the first node so it's more readable
console.log(g.shortestPath('A', 'H').concat(['A']).reverse());

