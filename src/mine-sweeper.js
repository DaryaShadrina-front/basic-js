const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const row = matrix.length;
  const column = matrix[0].length;
  const result = Array.from({ length: row }, () => Array(column).fill(0));

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (matrix[i][j]) {
        for (let x = -1; x <= 1; x++) {
          for (let y = -1; y <= 1; y++) {
              const newRow = i + x;
              const newColumn = j + y;
              if (newRow >= 0 && newRow < row && newColumn >= 0 && newColumn < column) {
                result[newRow][newColumn]++;
              }
          }
        }
      result[i][j]--;
      }
    }
  }
  return result;
}

module.exports = {
  minesweeper
};
