function reverseString(s) {
    if (s == null)
        return;
    let l = 0, r = s.length - 1;
    while (l < r) {
        let tmp = s[l];
        s[l] = s[r];
        s[r] = tmp;
        l++; r--;
    }
    return s
}

console.log(reverseString(["h", "e", "l", "l", "o"]))
