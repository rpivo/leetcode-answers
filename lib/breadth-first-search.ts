// type 
type Node = {
  value: string | null;
  left: string | null;
  right: string | null;
};


// example graph
const tree: {
  [key: string]: Node
} = {
	"10": {
		value: "10",
		left: "4",
		right: "17",
	},
	"4": {
		value: "4",
		left: "1",
		right: "9",
	},
	"17": {
		value: "17",
		left: "12",
		right: "18",
	},
	"1": {
		value: "1",
		left: null,
		right: null,
	},
	"9": {
		value: "9",
		left: null,
		right: null,
	},
	"12": {
		value: "12",
		left: null,
		right: null,
	},
	"18": {
		value: "18",
		left: null,
		right: null,
	},
};

// tree = references the graph to be searched
// rootNode = current root
// searchValue = node that is being searched for
const breadthFirstSearch = (tree: [], rootNode: Node, searchValue: string) => {
  // create a queue
  const queue = [];
  // push the current rootNode to the queue
  queue.push(rootNode);
  // while the queue has items
  while (queue.length > 0) {
    // create a copy of the current item in queue
    const current: Node = queue[0];
    // if the value of the current item equals the searchValue
    if (current.value === searchValue) {
      // print success
      console.log('searchValue has been found.');
      // close
			return;
    }
    // if the left property of the current item is not equal to null
    if (current.left !== null) {
      // push current.left to the queue
			queue.push(tree[current.left as unknown as number]);
		}
		// if the right property of the current item is not equal to null
		if (current.right !== null) {
			// push current.right to the queue
			queue.push(tree[current.right as unknown as number]);
		}
		// remove the first item in the queue, which was just processed
		queue.shift();
  }
  // print message if searchValue is not found
  console.log('searchValue not found.');
};