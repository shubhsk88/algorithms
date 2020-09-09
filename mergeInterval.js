function mergeIntervels(arr) {
  arr.sort((a, b) => a[0] - b[0]);
  if (arr.length <= 1) return arr;
  let c = { start: arr[0][0], end: arr[0][1] };
  let result = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i][0] < c.end) {
      c.end = Math.max(arr[i][1], c.end);
    } else {
      result.push([c.start, c.end]);
      c.start = arr[i][0];
      c.end = arr[i][1];
    }
  }
  result.push([c.start, c.end]);
  return result;
}

console.log(
  mergeIntervels([[1,4], [2,6], [3,5]])
);
