class TicTacToe {
  constructor() {
    this.step = 'x';
    this.field = new Array(3).fill(null).map(() => new Array(3).fill(null));
    this.drow = false;
    this.winner = null;
    this.isMoreTurns = true;
  }

  getCurrentPlayerSymbol() {
    return this.step === 'x' ? 'x' : 'o';
  }

  nextTurn(rowIndex, columnIndex) {
    if (this.field[rowIndex][columnIndex] !== null) {
      return;
    }
    this.field[rowIndex][columnIndex] = this.step;
    if (!this.isFinished()) {
      const symbol = this.getCurrentPlayerSymbol();
      this.step = symbol === 'x' ? 'o' : 'x';
    }
  }

  isFinished() {
    this.noMoreTurns();
    this.getWinner();
    if (!this.isMoreTurns || this.winner) {
      this.drow = this.winner === false ? true : false;
      return true;
    }
    return false;
  }

  getWinner() {
    let sumX = 0;
    let sumO = 0;
    for (let i = 0; i < this.field.length; i++) {
      let sumX = 0;
      let sumO = 0;
      for (let j = 0; j < this.field.length; j++) {
        if (this.field[i][j] === 'x') {
          sumX += 1;
        } else if (this.field[i][j] === 'o') {
          sumO += 1;
        }
      }
      if (sumX > 2 || sumO > 2) {
        this.winner = this.step;
      }
    }

    for (let i = 0; i < this.field.length; i++) {
      let sumX = 0;
      let sumO = 0;
      for (let j = 0; j < this.field.length; j++) {
        if (this.field[j][i] === 'x') {
          sumX += 1;
        } else if (this.field[j][i] === 'o') {
          sumO += 1;
        }
      }
      if (sumX > 2 || sumO > 2) {
        this.winner = this.step;
      }
    }
    sumX = 0;
    sumO = 0;
    for (let i = 0; i < this.field.length; i++) {
      if (this.field[i][i] === 'x') {
        sumX += 1;
      } else if (this.field[i][i] === 'o') {
        sumO += 1;
      }
      if (sumX > 2 || sumO > 2) {
        this.winner = this.step;
      }
    }
    sumX = 0;
    sumO = 0;
    for (let i = 0; i < this.field.length; i++) {
      if (this.field[2 - i][i] === 'x') {
        sumX += 1;
      } else if (this.field[2 - i][i] === 'o') {
        sumO += 1;
      }
      if (sumX > 2 || sumO > 2) {
        this.winner = this.step;
      }
    }
    return this.winner;
  }

  noMoreTurns() {
    this.isMoreTurns = false;
    this.field.forEach((row) => {
      row.forEach((column) => {
        if (column === null) {
          this.isMoreTurns = true;
        }
      });
    });
    return this.isMoreTurns;
  }

  isDraw() {
    return this.drow;
  }

  getFieldValue(rowIndex, colIndex) {
    if (rowIndex > 2) return;
    if (colIndex > 2) return;
    return this.field[rowIndex][colIndex];
  }
}

module.exports = TicTacToe;
