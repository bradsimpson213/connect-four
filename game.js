import { Column } from "./column.js";
import { ColumnWinInspector } from "./columnWinInspector.js";
import { RowWinInspector } from "./rowWinInspector.js";
import { DiagonalWinInspector } from "./diagonalWinInspector.js";

export class Game {
    constructor(playerOneName, playerTwoName) {
        this.playerOneName = playerOneName;
        this.playerTwoName = playerTwoName;
        this.currentPlayer = 1;
        this.winnerNumber = 0;
        this.columns = [
            new Column(),
            new Column(), 
            new Column(),
            new Column(), 
            new Column(), 
            new Column(),
            new Column()
        ];
    }

    getWinNum() {
        return this.winnerNumber;
    }

    getName() {
        switch(this.winnerNumber) {
            case 0:
                return `${this.playerOneName} vs. ${this.playerTwoName}`;
            case 1:
                return `${this.playerOneName} wins!`;
            case 2:
                return`${this.playerTwoName} wins!`;
            case 3:
                return `${this.playerOneName} ties with ${this.playerTwoName}`;
        }      
    }

    getTokenAt(rowIndex, columnIndex) {
        return this.columns[columnIndex].getTokenAt(rowIndex);
    }

    checkForTie() {
        if (this.columns.every(column => column.isFull())) {
            this.winnerNumber = 3;
        }
    }

    checkForColumnWin() {
        if (this.winnerNumber !== 0) return;
   
        for (let index = 0; index < this.columns.length; index++) {
            const column = this.columns[index];
            const inspector = new ColumnWinInspector(column);
            const winnerNumber = inspector.inspect();

            if (winnerNumber === 1 || winnerNumber === 2) {
                this.winnerNumber = winnerNumber;
            }
        }
    }

    checkForRowWin() {
        if (this.winnerNumber !== 0) return;

        for(let index = 0; index < 4; index++) {
            const columns = this.columns.slice(index, index + 4);
            const inspector = new RowWinInspector(columns);
            const winnerNumber = inspector.inspect();

            if (winnerNumber === 1 || winnerNumber === 2) {
                this.winnerNumber = winnerNumber;
                break;
            }
        }
    }
    checkForDiagonalWin() {
        if (this.winnerNumber !== 0) return;

        for (let index = 0; index < 4; index++) {
            const columns = this.columns.slice(index, index + 4);
            const inspector = new DiagonalWinInspector(columns);
            const winnerNumber = inspector.inspect();

            if (winnerNumber === 1 || winnerNumber === 2) {
                this.winnerNumber = winnerNumber;
                break;
            }
        }
    }

    playInColumn(index) {
        this.columns[index].add(this.currentPlayer);
        
        if (this.currentPlayer === 1) {
            this.currentPlayer = 2;
        } else {
            this.currentPlayer = 1;
        }
        this.checkForTie();
        this.checkForColumnWin();
        this.checkForRowWin();
        this.checkForDiagonalWin();
    }

    isColumnFull(columnIndex) {
        if(this.winnerNumber === 1 || this.winnerNumber === 2){
            return true;
        } 
        return this.columns[columnIndex].isFull();
    }
}
