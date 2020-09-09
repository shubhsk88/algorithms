const fun=(arr)=>{
    if(arr.length===0) return 0;
    else if(arr.length===1) return arr[0];
    let second=arr[0];
    let first=Math.max(second,arr[1]);
    for(let i=2;i<arr.length;i++)
    {
        let current=Math.max(first,second+arr[i]);
        second=first;
        first=current;
    }

    return first;
}

console.log(fun([7,10,12,7,9,14]))