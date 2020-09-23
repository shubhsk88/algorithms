function threeSum(arr) {
  let result = [];
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1,
      right = arr.length - 1;
    let sum = -arr[i];
    while (left < right) {
      //   while (arr[left] === arr[left - 1]) left += 1;
      //   while (arr[right] === arr[right - 1]) right -= 1;
      let currentSum = arr[left] + arr[right];
      
      if (currentSum === sum){ result.push([arr[i], arr[left], arr[right]]);
        left+=1;
        right-=1
    
    }
      else if (currentSum < sum) left += 1;
      else right -= 1;
    }
    // let target=-arr[i]
    // helper(target,arr,i+1,result);
  }

  return result;
}

console.log(threeSum([-5, 2, -1, -2, 3]));

// function helper(target,arr,left,result){
// let right=arr.length-1;
// while(left<right)
// {
//     let targetSum=arr[left]+arr[right]

// }

// }

//X+Y+Z+0;
//y+z=-X
