class Room {
    constructor (location, isStart, doors) {
        this.location = location;
        this.isStart = isStart;
        this.doors = doors;
    }
}

let checkForBulk = (matrix, x, y, fill, n) => {
    count = 0;
    if(x>=n-1 || x<=0 || y>=n-1 || y<=0) { return false }
    if(matrix[x+1][y] == fill) { count++ }
    if(matrix[x+1][y+1] == fill) { count++ }
    if(matrix[x][y+1] == fill) { count++ }
    if(matrix[x-1][y+1] == fill) { count++ }
    if(matrix[x-1][y] == fill) { count++ }
    if(matrix[x-1][y-1] == fill) { count++ }
    if(matrix[x][y-1] == fill) { count++ }
    if(matrix[x+1][y-1] == fill) { count++ }

    if(count > 3) { return false }
    else { return true }
}

let checkForDeadEnd = (matrix, x, y, fill, n) => {
    count = 0;
    if(x<n-1 && x>0 && y<n-1 && y>0 && matrix[x+1][y] != fill) { count++ }
    // if(x<n-1 && x>0 && y<n-1 && y>0 && matrix[x+1][y+1] == fill) { count++ }
    if(x<n-1 && x>0 && y<n-1 && y>0 && matrix[x][y+1] != fill) { count++ }
    // if(x<n-1 && x>0 && y<n-1 && y>0 && matrix[x-1][y+1] == fill) { count++ }
    if(x<n-1 && x>0 && y<n-1 && y>0 && matrix[x-1][y] != fill) { count++ }
    // if(x<n-1 && x>0 && y<n-1 && y>0 && matrix[x-1][y-1] == fill) { count++ }
    if(x<n-1 && x>0 && y<n-1 && y>0 && matrix[x][y-1] != fill) { count++ }
    // if(x<n-1 && x>0 && y<n-1 && y>0 && matrix[x+1][y-1] == fill) { count++ }

    if(count == 1) { return true }
    else { return false }
}

let createMatrix = (n) => {
    let roomsToGo = Math.floor((n*1.5)-1);
    let matrix = [];
    let fill = "🟩"
    for(let i = 0; i < n; i++) { matrix.push(new Array(n).fill("⬛")) };
    let sx = Math.ceil(Math.random() * n-1);
    let sy = Math.ceil(Math.random() * n-1);
    matrix[sx][sy] = fill;
    let tries = 0;
    while (roomsToGo > 0 && tries < n*20) {
        for(let x = 0; x < n; x++) { // move down
            for(let y = 0; y < n; y++) { // move right
                if(matrix[x][y] == fill) {
                    let c = Math.floor(Math.random() * 4);
                    if(c == 0) { if(matrix[x-1] != undefined && matrix[x-1][y] == "⬛" && checkForBulk(matrix, x-1, y, fill, n)) { matrix[x-1][y] = fill; roomsToGo -=1; break; }}
                    else if(c == 1) { if(matrix[x][y+1] != undefined && matrix[x][y+1] == "⬛" && checkForBulk(matrix, x, y+1, fill, n)) { matrix[x][y+1] = fill; roomsToGo -=1; break; }}
                    else if(c == 2) { if(matrix[x+1] != undefined && matrix[x+1][y] == "⬛" && checkForBulk(matrix, x+1, y, fill, n)) { matrix[x+1][y] = fill; roomsToGo -=1; break; }}
                    else if(c == 3) { if(matrix[x][y-1] != undefined && matrix[x][y-1] == "⬛" && checkForBulk(matrix, x, y-1, fill, n)) { matrix[x][y-1] = fill; roomsToGo -=1; break; }}
                }
                if(roomsToGo <= 0) { break }
            }
            if(roomsToGo <= 0) { break }
        }
        tries += 1;
    }
    let totalFills = 0;
    let totalDeadEnds = 0;
    for(let x = 0; x < n; x++) { // move down
        for(let y = 0; y < n; y++) { // move right
            if(matrix[x][y] == "🟩" || matrix[x][y] == "🟨") { totalFills++ }
            if(checkForDeadEnd(matrix, x, y, "⬛", n) && matrix[x][y] == "🟩") { matrix[x][y] = "🟨"; totalDeadEnds++ }
        }
    }
    matrix[sx][sy] = "🟦";
    if(totalFills == 1 || totalDeadEnds<1) { return createMatrix(n) }
    else { return matrix }
}

let printMatrix = (matrix) => {
    let n = matrix.length;
    let string = '';
    let sx;
    let sy;
    for(let x = 0; x < n; x++) { // move down
        for(let y = 0; y < n; y++) { // move right
            string += `${matrix[x][y]}`
            
        }
        string += "\n";
    }
    return string
}

console.log(printMatrix(createMatrix(5)));