function moveElement(arr, num) {
  let i = 0,
    j = arr.length - 1;

  while (i < j) {
    while (i < j && arr[j] === num) j -= 1;
    if (arr[i] === num) [arr[i], arr[j]] = [arr[j], arr[i]];
    i += 1;
  }

  return arr;
}

moveElement([2, 1, 2, 2, 2, 3, 4, 2], 2);
