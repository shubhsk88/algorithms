var minDepth = function (root) {
  if (!root) return 0;
  let queue = [root],
    count = 0;
  while (queue.length) {
    count += 1;
    let level = queue.length;
    for (let i = 0; i < level; i++) {
      let node = queue.shift();
      if (node.left === null && node.right === null) return count;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
};
