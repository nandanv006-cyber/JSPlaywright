

let arr=[,,345,10,43,345,432,345,678,90,,345,34543,4,565433456543,456543,34543345654,33456543456,4345543,3456,10];

let first=-Infinity
let second=-Infinity
for(let i in arr)
{
   if(arr[i]>=first)
   {
        second=first;
        first=arr[i];
   }
   else if(arr[i]>first&&arr[i]>second)
   {
    second=arr[i];
   }
}
console.log(second)



//prime in filter
let prime = arr.filter((num)=>{

     if (num < 2)
         return false;
    for (let i = 2; i <= Math.sqrt(num); i++) 
        {
        if (num % i === 0)
            return false;
    }
    return true;
})
console.log(prime);

// Sort without sort method

// arr=[2343,2344,3234543,3454,32345,4334,5433454,3]
for(let i=0;i<arr[i];i++)
{
    for(let j=0;j<arr[j];j++)
    {
        if(arr[j]>=arr[j+1])
        {
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
}
console.log(arr);


let t = arr.filter(num=>{
    if(num===10)
    {
        return arr.indexOf(10)
    }})

    
console.log(t)
// console.log(arr.includes(10))

