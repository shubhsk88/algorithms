var rightSideView = function (root) {
  if (!root) return [];
  let queue = [root],
    result = [];
  while (queue.length) {
    let level = queue.length;
    for (let i = 0; i < level; i++) {
      let node = queue.shift();
      if (i === level - 1) result.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return result;
};
