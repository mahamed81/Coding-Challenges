/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 
 Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
Output: 6
 */
let longestOnes = function (nums, k) {
    let curr = 0, ans = 0, left =0;
    for (let i = 0; i < nums.length; i++) {
            if(nums[i]===0){
                curr ++;
            }

            while(curr > k){    
                if(nums[left]===0){
                    curr--;
                }
                left++;
            }
            ans = Math.max(ans, i - left +1)
        }
        console.log(ans);
    };
   


longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2)