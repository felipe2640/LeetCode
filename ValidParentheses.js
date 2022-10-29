var isValid = function(s) {
    
    let array = [];
    
    for (let idx = 0; idx < s.length; idx++) {
    
        if (s[idx] == '{') {
            array.push('}');
        } else if (s[idx] == '[') {
            array.push(']');
        } else if (s[idx] == '(') {
            array.push(')');
        }
    
        else if (array.pop() !== s[idx]) {
            return false;
        }
    }
    return !array.length;
};

isValid("(]")