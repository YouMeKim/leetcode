function twoSum(nums: number[], target: number): number[] {
    for(var i: number = 0; i < nums.length; i++) {
        var indexOfsecondNumber: number = nums.slice(i+1).indexOf(target - nums[i]);
        if(indexOfsecondNumber !== -1) {
            return [i, indexOfsecondNumber + i + 1];
        }
    }
};