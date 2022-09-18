function NumArray(nums) {
    this.nums = nums
};

function sumRange(left, right) {
    let soma = 0
    for (var i = left; i <= right; i++) {
        soma += this.nums[i]
    }
    return soma

};