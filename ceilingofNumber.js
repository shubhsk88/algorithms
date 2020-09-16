var search = function (nums, target) {
  if (nums.length == 0) return -1;
  else if (nums.length === 1 && nums[0] === target) return 0;
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return left;
};
