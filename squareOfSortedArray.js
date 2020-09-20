function squareSorted(arr)
{
  let newArr=new Array(arr.length).fill(null);
  let left=0,right=arr.length-1,i=arr.length-1
  while(left<right)
  {
    let first=arr[left]*arr[left];
    let second=arr[right]*arr[right]
    if(second>first)
    {
      [newArr[i],newArr[i-1]]=[second,first]
      
    }
    else{
     [newArr[i],newArr[i-1]]=[first,second]
    }
      left+=1;
      right-=1;
      i-=2;



  }
  return newArr

}


squareSorted([-4,-2,-1,0,3,5])