
//Iterative approach
var invertTree = function (root) {
    let queue = [root];
    while (queue.length) {
      let currentNode = queue.shift();
  
      if (currentNode === null) {
        continue;
      }
      swap(currentNode);
      queue.push(currentNode.left);
      queue.push(currentNode.right);
    }
  
    return root;
  };
  
  function swap(tree) {
    [tree.left, tree.right] = [tree.right, tree.left];
  }




//recurisve approach

// var invertTree = function(root) {

//     if(root===null) return null ;
//     swap(root);
//     invertTree(root.left);
//     invertTree(root.right)

//     return root
// };
// function swap(tree)
// {
//     [tree.left,tree.right]=[tree.right,tree.left]

// }

