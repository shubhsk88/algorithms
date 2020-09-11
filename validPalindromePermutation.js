function validPalindrome(res)
{
   res=res.replace(/\W/gi,"")
  let str=res.toLowerCase()
  
  let hash={}
  for(const char of str)
  {
    if(str.length%2!==0 )
    {
      if(str[Math.floor(str.length/2)])
      {
        continue;
      }
    }
    if(!hash[char]) hash[char]=0
    hash[char]+=1
  }
  
  for (let key in hash)
  {
   if(hash[key]%2!==0) return false
  }
  return true;
}

validPalindrome("code")
