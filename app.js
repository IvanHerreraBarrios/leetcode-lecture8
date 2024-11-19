var maxIncreaseKeepingSkyline = function(grid) {
    const maxRows = []
    const maxCols = []

    for(let i=0; i < grid.length; i++){
        let maxRow = 0
        let maxCol = 0
        for(let j=0; j < grid[i].length; j++){
            if (grid[i][j] > maxRow) maxRow = grid[i][j]
            if (grid[j][i] > maxCol) maxCol = grid[j][i]
        }
        maxRows[i] = maxRow
        maxCols[i] = maxCol
    }

    let sum = 0
    for(let i = 0; i < grid.length; i++){
        for(let j=0; j < grid.length; j++){
            const min = Math.min(maxRows[i], maxCols[j])
            sum += min - grid[i][j]
        }
    }
    return sum
    
};