// You want to know how many of the stones you have are also jewels.


function jewelsStone(jewels, stones) {
    let empty = []

    let splitJewels = jewels.split("")
    let splitStone = stones.split("")

    for (let i = 0; i < splitStone.length; i++) {
        if (splitJewels.includes(splitStone[i])) {
            empty.push(splitStone)
        }
    }
    return empty.length
};