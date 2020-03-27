import { Column } from "./column.js"


export class Game {
    constructor(playerOneName, playerTwoName) {
        this.playerOneName = playerOneName;
        this.playerTwoName = playerTwoName;
        this.currentPlayer = 1;
        this.columns = [new Column(0), new Column(1), new Column(2),
        new Column(3), new Column(4), new Column(5),
        new Column(6)]

    }

    getName() {
        return `${this.playerOneName} vs. ${this.playerTwoName}`;
    }

    playInColumn(index) {
        this.columns[index].add(this.currentPlayer)

        if (this.currentPlayer === 1) {
            this.currentPlayer = 2;
        } else {
            this.currentPlayer = 1;
        }
    }



}
