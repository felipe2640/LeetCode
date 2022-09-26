// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// Example:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]


function twoSum(nums, target) {
    if (nums == null || nums.length < 2)
        return null;
    const myMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (myMap.has(target - nums[i])) {
            return [myMap.get(target - nums[i]), i];
        }
        myMap.set(nums[i], i);
    }
}