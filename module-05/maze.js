var maze = [];
var current_pos = { x: 0, y: 0 };
var moves = [
    { dx: -1, dy: 0 }, // Up
    { dx: 0, dy: -1 }, // Left
    { dx: 1, dy: 0 }, // Down
    { dx: 0, dy: 1 }, // Right
];
// Last In First Out
var path = [];

function InitMaze(M, N) {
    // згенерувати лабіринт
    for (var i = 0; i < M; i++) {
        maze[i] = [];
        for (var j = 0; j < N; j++) {
            if (Math.random() < 0.1) {
                maze[i][j] = 0;
            } else {
                maze[i][j] = 1;
            }
        }
        if (i === 0)
            maze[i][0] = 1;
        if (i === (M - 1))
            maze[i][N - 1] = 1;
        console.log("i:" + i + "  " + maze[i].join());
    }
}

function TryMove(pos) {
    var x = current_pos.x + moves[pos].dx;
    var y = current_pos.y + moves[pos].dy;
    if ((x < 0) || (y < 0) ||
        (x === maze.length) ||
        (y === maze[0].length)) {
        return false;
    }
    return maze[x][y] === 1; //1 - free, 0 - lock
}

function FindPath() {
    var q = 0;
    path.push({ x: current_pos.x, y: current_pos.y, ind: q });
    while (true) {
        if (current_pos.x === (maze.length - 1) &&
            current_pos.y === (maze[0].length - 1))
            break;

        if (TryMove(q)) {
            maze[current_pos.x][current_pos.y] = 2;
            current_pos.x += moves[q].dx;
            current_pos.y += moves[q].dy;
            PrintMove(q, current_pos);
            path.push({ x: current_pos.x, y: current_pos.y, ind: q });
            q = 0;
        } else {
            q++;
            if (q > 3) {
                do {
                    var tmp = path.pop();
                    if (tmp === undefined)
                        return [];
                    current_pos.x = tmp.x;
                    current_pos.y = tmp.y;
                    PrintMove(9, current_pos);
                    maze[current_pos.x][current_pos.y] = 1;
                    q = tmp.ind + 1;
                    if (q < 4) break;
                } while (true);
            }
        }
    }
    return path;
}

function PrintMove(q, pos) {
    switch (q) {
        case 0:
            console.log("Up" + " [" + pos.x + " " + pos.y + "]");
            break;
        case 1:
            console.log("Le" + " [" + pos.x + " " + pos.y + "]");
            break;
        case 2:
            console.log("Dn" + " [" + pos.x + " " + pos.y + "]");
            break;
        case 3:
            console.log("Ri" + " [" + pos.x + " " + pos.y + "]");
            break;
        case 9:
            console.log("Ret" + " [" + pos.x + " " + pos.y + "]");
            break;
    }
}

InitMaze(4, 3);
//console.log(maze[0].length);
var path = FindPath();
for (let index = 0; index < path.length; index++) {
    console.log(path[index].x + " " + path[index].y);
}