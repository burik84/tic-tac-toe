class TicTacToe {
    constructor() {
        this.step='x';
        this.field=(new Array(3)).fill(null).map(()=>new Array(3).fill(null))
        this.drow=false;
        this.winner=false;
    }

    getCurrentPlayerSymbol() {
        return this.step==='x'?'x':'o'
    }

    nextTurn(rowIndex, columnIndex) {
        console.log(rowIndex,columnIndex);
        if (this.field[rowIndex][columnIndex]!==null) {
            return
        }else{
            const symbol=this.step
            this.field[rowIndex][columnIndex]=symbol
            this.step=symbol==='x'?'o':'x'
        }
        this.noMoreTurns()
    }

    isFinished() {

    }

    getWinner() {
        if(!this.winner)return
        return getCurrentPlayerSymbol()
    }

    noMoreTurns() {
        let turns=false
        this.field.forEach(row=>{
            row.forEach((column)=>{
                if(column===null){
                    turns=true
                }
            })
        })
        if(!turns){
            this.drow=this.winner===false?true:false;
        }
        return !turns
    }

    isDraw() {
        return this.drow
    }

    getFieldValue(rowIndex, colIndex) {
        if(rowIndex>2)return
        if(colIndex>2)return
        return this.field[rowIndex][colIndex]
    }
}

module.exports = TicTacToe;
