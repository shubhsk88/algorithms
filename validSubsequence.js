const validSubSequence = (arr1, arr2) => {
  let arr1Idx = 0,
    arr2Idx = 0;
  while (arr1Idx < arr1.length && arr2Idx < arr2.length) {
    if (arr1[arr1Idx] === arr2[arr2Idx]) arr2Idx += 1;
    arr1Idx += 1;
  }
  return arr2Idx === arr2.length;
};

console.log(validSubSequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 5, -1, 10]));
