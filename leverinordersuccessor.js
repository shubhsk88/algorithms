var connect = function (root) {
  if (!root) return null;
  if (!root) return null;
  let queue = [root];
  while (queue.length) {
    previous = null;
    let level = queue.length;
    for (let i = 0; i < level; i++) {
      let node = queue.shift();

      if (previous) previous.next = node;

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);

      previous = node;
      if (i === level - 1) {
        node.next = null;
      }
    }
  }
  return root;
};
