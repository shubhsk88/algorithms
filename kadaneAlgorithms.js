/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let maxSum = nums[0],
    max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    maxSum = Math.max(nums[i], maxSum + nums[i]);
    max = Math.max(maxSum, max);
  }
  return max;
};
