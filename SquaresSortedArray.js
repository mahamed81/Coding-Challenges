

const sortedSquares = (nums)=>{
    let i=0;
    while(i<=nums.length-1){
        nums[i]= nums[i]*nums[i];
        i++;
    }
    return nums.sort((a,b)=>{return a-b});
}

console.log(sortedSquares([-4,-1,0,3,10]))