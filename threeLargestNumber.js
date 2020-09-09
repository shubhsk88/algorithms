function largestNumber(arr) {
  let result = new Array(3).fill(null);
  for (const num of arr) {
    updateLargest(result, num);
  }
  return result;
}

function updateLargest(arr, num) {
  if (arr[2] === null || num > arr[2]) {
    shiftAndUpdate(arr, num, 2);
  } else if (arr[1] === null || num > arr[1]) {
    shiftAndUpdate(arr, num, 1);
  } else if (arr[0] === null || num > arr[0]) {
    shiftAndUpdate(arr, num, 0);
  }
}

function shiftAndUpdate(arr, num, idx) {
  for (let i = 0; i <= idx; i++) {
    if (i === idx) {
      arr[i] = num;
    } else {
      arr[i] = arr[i + 1];
    }
  }
}

largestNumber([1, 44, 99]);
