var permute = function(nums) {
    let result=[];
    helper(0,nums,result)
    return result;
};

function helper(idx,arr,result)
{
    if(idx===arr.length-1)
        {
            result.push([...arr])
        }
    else{
        for(let i=idx;i<arr.length;i++)
            {
                swap(arr,idx,i)
                helper(idx+1,arr,result)
                swap(arr,idx,i);
                
            }
    }
    
}


function swap(arr,i,j)
{
    [arr[i],arr[j]]=[arr[j],arr[i]]
}