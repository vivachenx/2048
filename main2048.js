var board = []
var score = 0

$(document).ready(function(){
    newGame()
})

var newGame = function() {
    //初始化棋盘
    init()
    //在随机两个格子生成数字
    generateOneNumber()
    generateOneNumber()
    // console.log('newGame');
}

var init = function() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            var gridCell = $(`#grid-cell-${i}-${j}`)
            gridCell.css('top', getPosTop(i, j))
            gridCell.css('left', getPosLeft(i, j))
        }
    }
    for (let i = 0; i < 4; i++) {
        board[i] = []
        for (let j = 0; j < 4; j++) {
            board[i][j] = 0
        }
    }
    updateBoardView()
}

var updateBoardView = function() {
    $(".number-cell").remove()
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            $('#grid-container').append(`<div class="number-cell" id="number-cell-${i}-${j}"></div>`)
            var theNemberCell = $(`#number-cell-${i}-${j}`)
            if (board[i][j] === 0) {
                theNemberCell.css('height', '0px')
                theNemberCell.css('width', '0px')
                theNemberCell.css('top', getPosTop(i, j) + 50)
                theNemberCell.css('left', getPosLeft(i, j) + 50)
            } else {
                theNemberCell.css('height', '100px')
                theNemberCell.css('width', '100px')
                theNemberCell.css('top', getPosTop(i, j))
                theNemberCell.css('left', getPosLeft(i, j))
                theNemberCell.css('background-color', getNumberBackgroundColor(board[i][j]))
                theNemberCell.css('color', getNumberColor(board[i][j]))
                theNemberCell.text(board[i][j])
            }
        }
    }
}

var generateOneNumber = function() {
    if (nospace(board)) {
        return false
    }
    //随机位置
    var randx = parseInt(Math.floor(Math.random() * 4))
    // console.log('randx :', randx);
    var randy = parseInt(Math.floor(Math.random() * 4))
    // console.log('randy :', randy);
    while (true) {
        if (board[randx][randy] === 0) {
            break;
        }
        randx = parseInt(Math.floor(Math.random() * 4))
        randy = parseInt(Math.floor(Math.random() * 4))
    }
    //随机数字
    var randNumber = Math.random() < 0.5 ? 2 : 4
    // console.log('randNumber :', randNumber);
    //显示数字
    board[randx][randy] = randNumber
    showNumberWithAnimation(randx, randy, randNumber)
    // console.log('generateOneNumber');
    return true
}

$(document).keydown(function(event){
    switch (event.keyCode) {
        case 37:
            if (moveLeft()) {
                generateOneNumber()
                // isGameOver()
            }
            // console.log('left');
            break;
        case 38:
            if (moveUp()) {
                generateOneNumber()
                isGameOver()
            }
            // console.log('up');
            break;
        case 39:
            if (moveRight()) {
                generateOneNumber()
                isGameOver()
            }
            // console.log('right');
            break;
        case 40:
            if (moveDown()) {
                generateOneNumber()
                isGameOver()
            }
            // console.log('down');
            break;
    }
})

var moveLeft = function() {
    if (!canMoveLeft(board)) {
        return false
    }
    for (var i = 0; i < 4; i++) {
        for (var j = 1; j < 4; j++) {
            if (board[i][j] !== 0) {
                for (var k = 0; k < j; k++) {
                    if (board[i][k] === 0 && noBlockHorizontal(i, k, j, board)) {
                        showMoveAnimation(i, j, i, k)
                        board[i][k] = board[i][j]
                        board[i][j] = 0
                        continue
                    } else if (board[i][k] === board[i][j] && noBlockHorizontal(i, k, j, board)) {
                        showMoveAnimation(i, j, i, k)
                        board[i][k] += board[i][j]
                        board[i][j] = 0
                        continue
                    }
                }
            }
        }
    }
    setTimeout("updateBoardView()", 200)
    return true
}
