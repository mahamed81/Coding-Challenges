

// s = "1101100111"
//what is the longest substring with at most one "0"
const binarySubstring = (nums)=>{
    let left =0;
    let cur =0;
    let ans = 0;
    let right =0;
    for(right; right<nums.length; right++){

            if(nums[right] ==='0'){
                cur ++;    
            }
            while(cur>1){
               if(nums[left]==='0'){
                cur --;
               }
               left ++;
            }
            
            ans  = Math.max(ans, right - left + 1 )
    }
        console.log(left, right)
        console.log(ans)

    return ans;
}

binarySubstring("1101100111");
