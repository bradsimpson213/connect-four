export class Column {
    constructor() {
        this.tokens = [null, null, null, null, null, null];
    }
    add(player) {
        for (let i = this.tokens.length - 1; i >= 0; i--) {
            if (this.tokens[i] === null) {
                this.tokens[i] = player;
                break;
            }
        }
    }
    getTokenAt(rowNum) {
        return token[token.length - rowNum];
    }


}
