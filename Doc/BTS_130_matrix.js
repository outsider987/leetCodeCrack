/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
 function mark(board, i, j, rows, cols) {
    if (i < 0 || i > rows - 1 || j < 0 || j > cols - 1 || board[i][j] !== "O")
      return;
  
    board[i][j] = "A";
    mark(board, i + 1, j, rows, cols);
    mark(board, i - 1, j, rows, cols);
    mark(board, i, j + 1, rows, cols);
    mark(board, i, j - 1, rows, cols);
  }
  /**
   * @param {character[][]} board
   * @return {void} Do not return anything, modify board in-place instead.
   */
  var solve = function(board) {
    const rows = board.length;
    if (rows === 0) return [];
    const cols = board[0].length;
  
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (i === 0 || i == rows - 1 || j === 0 || j === cols - 1) {
          mark(board, i, j, rows, cols);
        }
      }
    }
  
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (board[i][j] === "O") {
          board[i][j] = "X";
        } else if (board[i][j] === "A") {
          board[i][j] = "O";
        }
      }
    }
  
    return board;
  };