function containsDuplicate(nums) {
    return nums.length !== new Set(nums).size
}

containsDuplicate([1, 2, 3, 1])