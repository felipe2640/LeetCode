var NumMatrix = function (matrix) {
    const m = matrix.length;
    const n = matrix[0].length;

    const sum = [...Array(m)].map(_ => [...Array(n)].fill(0));
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            sum[i][j] = matrix[i][j];
            if (i > 0)
                sum[i][j] += sum[i - 1][j];
            if (j > 0)
                sum[i][j] += sum[i][j - 1];
            if (i > 0 && j > 0)
                sum[i][j] -= sum[i - 1][j - 1];
        }
    }

    this.sum = sum;
};

NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
    return this.sum[row2][col2] - (this.sum[row1 - 1]?.[col2] || 0) - (this.sum[row2]?.[col1 - 1] || 0) +
        (this.sum[row1 - 1]?.[col1 - 1] || 0);
};