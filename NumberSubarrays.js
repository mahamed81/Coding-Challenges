
//nums = [10, 5, 2, 6], k = 100
//return the number of subarrays where the product of all
// the elements in the subarray is strictly less than k.
// cur-- represent the current product of the window,

const numSubarrayProductLessThanK = (nums, k)=>{
    let left =0, right =0, cur = 1, ans = 0;

    for(right; right<nums.length; right++){
        cur *= nums[right]

        while(cur>=100){
            cur /= nums[left]
            left++;
        }   
        ans += (right -left +1)
    }
    console.log(ans)
}


numSubarrayProductLessThanK([10, 5, 2, 6], 100)
