function smallestDifference(arr1, arr2) {
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  let i = 0,
    j = 0,
    smallest = Infinity,
    current = Infinity,
    result = [];
  while (i < arr1.length && j < arr2.length) {
    let firstNum = arr1[i];
    let secondNum = arr2[j];
    if (firstNum < secondNum) {
      current = secondNum - firstNum;
      i += 1;
    } else if (secondNum < firstNum) {
      current = firstNum - secondNum;
      j += 1;
    } else {
      return [firstNum, secondNum];
    }
    if (current < smallest) {
      smallest = current;
      result = [firstNum, secondNum];
    }
  }
  return result;
}

console.log(smallestDifference([-1, 5, 10, 20, 28, 3], [28, 134, 135, 15, 17]));
