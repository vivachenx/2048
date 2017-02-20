var showNumberWithAnimation = function(i, j, randNumber) {
    var numberCell = $(`#number-cell-${i}-${j}`)
    numberCell.css('background-color', getNumberBackgroundColor(randNumber))
    numberCell.css('color', getNumberColor(randNumber))
    numberCell.css('font-size', getNumberSize(board[i][j]))
    numberCell.text(randNumber)

    numberCell.animate({
        width: cellSideLength,
        height: cellSideLength,
        top: getPosTop(i, j),
        left: getPosLeft(i, j)
    }, 50)
    // console.log('showNumberWithAnimation');
}

var showMoveAnimation = function(fromx, fromy, tox, toy) {
    var numberCell = $(`#number-cell-${fromx}-${fromy}`)
    numberCell.animate({
        top: getPosTop(tox, toy),
        left: getPosLeft(tox, toy)
    }, 200)
}

var updateScore = function(score) {
    // TODO: 添加分数动画
    $('#score').text(score)
}
