function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    while (j > 0 && arr[j] < arr[j - 1]) {
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      j -= 1;
    }
  }
  return arr;
}

console.log(insertionSort([4, 3, 2, 4, 5]));
