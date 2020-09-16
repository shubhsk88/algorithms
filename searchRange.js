var searchRange = function (nums, target) {
    let firstPass = [-1, -1];
    firstPass[0] = binarySearch(nums, target, false);
    if(firstPass[0]!==-1)
    {
      firstPass[1]=binarySearch(nums,target,true)
    }
    return firstPass;
  };
  
  function binarySearch(arr, target, isLeft) {
    let left = 0,
      right = arr.length - 1,
      idx = -1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid] < target) {
        left += 1;
      } else if (arr[mid] > target) {
        right -= 1;
      } else {
        idx = mid;
        if (isLeft) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
    }
    return idx;
  }
  