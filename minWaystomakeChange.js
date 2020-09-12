function minCoinChange(num,coins)
{
  let ways=new Array(num+1).fill(0)
  ways[0]=1
  for(let i=0;i<coins.length;i++)
  {
    for(let j=1;j<=num;j++)
    {
        if(coins[i]<=j)
        {
          ways[j]=ways[j]+ways[j-coins[i]]
        }
    }
  }
  return ways[ways.length-1]
}


minCoinChange(10,[1,5,10,25])