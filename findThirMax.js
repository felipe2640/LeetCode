// Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.

function findThirMax(arr) {
    let first = -Infinity
    let second = -Infinity
    let third = -Infinity

    for (let i of arr) {
        if (i === first || i === second || i === third) {
            continue
        }
        if (i > first) {
            [first, second, third] = [i, first, second]; continue;
        };
        if (i > second) {
            [second, third] = [i, second]; continue;
        };
        if (i > third) {
            third = i; continue;
        };
    };
    return third !== -Infinity ? third : first;
}


console.log(findThirMax([1, 5, 23, 3, 676, 4, 35, 4, 2]))