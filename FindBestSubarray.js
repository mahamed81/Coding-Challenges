

///[3,-1,4,12,-8,5,6]
/** */
//     3,-1,4,12 = 18
//     -1,4,12,-8 = 7
//     4,12,-8, 5 = 13
//     12,-8,5,6 = 15 
// */
///k=4
//find the sum of the subarray with the largest sum whose length is k
const findBestSubarray = (nums, k) => {
    // let ans = 0, cur = 0, temp = k-1, max =0;

    // for (let i = 0; i < k; i++) {
    //     cur+= num[i]
    // }
   // max = ans;
   // ans = cur;
//    while(cur<temp){
//        if(max < (ans - (num[cur]) + (num[k]))){
//          max =  ans - num[cur] + num[k]
//        }
//        ans = ans - (num[cur]) + (num[k])
//        cur++;
//        k++;
//    }

let curr = 0;
for (let i = 0; i < k; i++) {
    curr += nums[i];
}

let ans = curr;
for (let i = k; i < nums.length; i++) {
    curr += nums[i] - nums[i - k];
    ans = Math.max(ans, curr);
}
console.log(ans)
return ans;

   
}

findBestSubarray([3, -1, 4, 12, 8, 5, 6], 4)