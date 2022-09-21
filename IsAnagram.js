function isAnagram(s, t) {
    if (s == null || t == null)
        return s == null && t == null;


    const sCharArray = Array.from(String(s), String).sort()
    const tCharArray = Array.from(String(t), String).sort()
    if (sCharArray.length != tCharArray.length)
        return false;

    for (let i = 0; i < sCharArray.length; i++) {
        if (sCharArray[i] != tCharArray[i])
            return false;
    }

    return true;
}

isAnagram("test", "sett")
