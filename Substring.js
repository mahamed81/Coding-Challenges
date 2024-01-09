

//find the longest subarray with a sum less than or equal to k
//Will be using Sliding Window Technique
//nums = [3, 2, 1, 3, 1, 1] and k = 5.
const longestSubtring = (nums, k) => {
    // let left=0 
    // let cur =0;
    // let right = 0;
    // let ans = 0;

    //     for(right; right<nums.length; right++){
    //             cur += nums[right];
    //             while(cur>k){
    //                 cur -= nums[left];
    //                 left++;
    //             }
    //     }
    //       console.log(right, left)
    // //   console.log(right - left )
    // console.log(Math.max(ans, right - left +1))
    let left = 0, curr = 0, ans = 0;
    let right = 0
    for (right; right < nums.length; right++) {
        curr += nums[right];
        while (curr > k) {
            curr -= nums[left];
            left++;
        }
    ans = Math.max(ans, right - left + 1);
    console.log(right, left)

    }
   // ans = Math.max(ans, right - left + 1);

    console.log(ans)

}
longestSubtring([3, 1, 2, 7, 4, 2, 1, 1, 5], 8)