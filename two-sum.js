const targetPair = (arr, sum) => {
  if (arr.length === 0) return -1;
  let low = 0,
    high = arr.length - 1;
  while (low < high) {
    let target = arr[low] + arr[high];
    if (target < sum) {
      low += 1;
    } else if (target > sum) {
      high -= 1;
    } else {
      return [low, high];
    }
  }
  return -1;
};

console.log(targetPair([2,5,9,11],11));
clgz