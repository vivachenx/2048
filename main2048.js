var board = new Array()
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
}

var init = function() {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            var gridCell = $(`#grid-cell-${i}-${j}`)
            gridCell.css('top', getPosTop(i, j))
            gridCell.css('left', getPosLeft(i, j))
        }
    }
    for (var i = 0; i < 4; i++) {
        board[i] = new Array()
        for (var j = 0; j < 4; j++) {
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
}
