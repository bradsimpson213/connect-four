import { Column } from "./column.js";

export class Game {
    constructor(playerOneName, playerTwoName) {
        this.playerOneName = playerOneName;
        this.playerTwoName = playerTwoName;
        this.currentPlayer = 1;
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

    getName() {
        return `${this.playerOneName} vs. ${this.playerTwoName}`;
    }

    getTokenAt(rowIndex, columnIndex) {
        return this.columns[columnIndex].getTokenAt(rowIndex);
    }

    playInColumn(index) {
        this.columns[index].add(this.currentPlayer);

        if (this.currentPlayer === 1) {
            this.currentPlayer = 2;
        } else {
            this.currentPlayer = 1;
        }
    }
}
