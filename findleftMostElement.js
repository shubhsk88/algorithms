var findBottomLeftValue = function (root) {
  if (!root) return 0;
  let queue = [root],
    current = null;
  while (queue.length > 0) {
    let level = queue.length;
    for (let i = 0; i < level; i++) {
      let node = queue.shift();
      if (i === 0) current = node.val;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return current;
};
