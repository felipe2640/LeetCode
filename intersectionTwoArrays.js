function intersection(nums1, nums2) {
    const set = new Set(nums1);
    return [...new Set(nums2.filter(n => set.has(n)))]
}

console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]))
