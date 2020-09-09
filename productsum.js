function productSum(arr,multipler=1)
{
let result=0;
  for(const num of arr)

  {
    if (Array.isArray(num))
    {
      result+=productSum(num,multipler+1)

    }
    else{
      result+=num;

    }
    

  }
  return result*multipler;
}


productSum([5,2,[7,-1],3,[6,[-13,8],4]])