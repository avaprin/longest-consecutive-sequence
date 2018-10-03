module.exports = function longestConsecutiveLength(array) {
  let arr =[];
  let k = 0;
  let c = 0;
  if(array.length===1)
      return 1;
  for(let i = 0;i<array.length;i++)
      arr[array[i]]++;
  for(let i = 0;i<arr.length;i++)
  {
      if(arr[i]!==undefined)
      {
          c++;
      }
      else
      {
          if(c>=k)
              k=c;
          c=0;
      }
  }
  return k;// your solution here
}
