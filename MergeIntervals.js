function mergeIntervals(intervals) {
    const lengthArray = intervals.length
    if (lengthArray < 2 || intervals == null) {
        return intervals
    }
    intervals.sort((a, b) => a[0] - b[0])
    const firstArray = Array.from(intervals[0])[0]
    const secondArray = Array.from(intervals[1])[1]
    const restArray = Array.from(intervals.values()).splice(2, lengthArray)
    const mergeIntervals = [[firstArray, secondArray]]
    if (lengthArray == 2) {
        return mergeIntervals
    }
    if (lengthArray > 2) {
        return mergeIntervals.concat(restArray)
    }

}

mergeIntervals([[1, 4], [5, 6]])