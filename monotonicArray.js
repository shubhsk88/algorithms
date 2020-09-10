var isMonotonic = function (A) {
  if (A.length === 1) return true;
  let isIncreasing = true;
  let isDecreasing = true;
  for (let i = 1; i < A.length; i++) {
    if (A[i] < A[i - 1]) {
      isDecreasing = false;
    }
    if (A[i] > A[i - 1]) {
      isIncreasing = false;
    }
  }

  return isDecreasing || isIncreasing;
};
