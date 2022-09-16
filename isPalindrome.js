function isPalindro(s) {
    s = s.toLowerCase()
        .replace(/[^A-Za-z0-9]/g, '')
        .split('')
    return (
        s.slice(0, Math.floor(s.length / 2))
            .every((letter, index) => letter === s[s.length - 1 - index]))
}

console.log(isPalindro("A man, a plan, a canal: Panama"))