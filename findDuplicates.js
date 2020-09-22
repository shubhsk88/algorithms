function duplicates(arr){
 
    let i=0,r=[]
    while(i<arr.length)
    {
      let j=arr[i]-1;
      if(arr[j]!==arr[i])
      {
        [arr[i],arr[j]]=[arr[j],arr[i]];
  
      }
      else{
        i+=1;
      }
    }
    for(let i=0;i<arr.length;i++)
    {
      if(arr[i]!==i+1)
      r.push(arr[i])
    }
    return r
  }
  
  duplicates([5, 4, 7, 2, 3, 5, 3])