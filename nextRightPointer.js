var connect = function (root) {
  let queue = [root];
  while (queue.length) {
    let previous = null;
    let level = queue.length;
    for (let i = 0; i < level; i++) {
      let node = queue.shift();
      if (previous !== null) previous.next = node;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      previous = node;
    }
  }
  return root;
};
