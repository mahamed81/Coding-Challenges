const findMaxAverage = function(nums, k) {
    let curr= 0, ans = 0;
    for(let i=0; i<k; i++){
        curr+= nums[i];
    }
        ans = curr/k;
    console.log("Curr: " +curr)
    for(let j=k; j<nums.length; j++){
        curr += nums[j] - nums[j-k];
        let avg = curr/k;
        ans = Math.max(ans, avg)
    }
    console.log(ans)
    return ans;
};


findMaxAverage([1,12,-5,-6,50,3], 4)
