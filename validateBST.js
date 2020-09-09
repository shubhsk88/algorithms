var isValidBST = function (root) {
  return helper(root, -Infinity, Infinity);
};

function helper(tree, minVal, maxVal) {
  if (!tree) return true;
  if (tree.val <= minVal || tree.val >= maxVal) {
    return false;
  }
  return (
    helper(tree.left, minVal, tree.val) && helper(tree.right, tree.val, maxVal)
  );
}
