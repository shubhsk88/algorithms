var levelOrder = function (root) {
  if (!root) return [];
  let queue = [root],
    result = [],
    bool = false;
  while (queue.length > 0) {
    let node = queue.shift();
    if (bool) {
      return node.val;
    }

    if (node.val === current) {
      bool = true;
    }
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return result;
};
