export class DiagonalWinInspector{
    constructor(columns){
        this.columns = columns;
    }
    
    inspect() {
        for (let row = 0; row <= 5; row++) {
            let col1 = this.columns[0].getTokenAt(row);
            let col2 = this.columns[1].getTokenAt(row + 1);
            let col3 = this.columns[2].getTokenAt(row + 2);
            let col4 = this.columns[3].getTokenAt(row + 3);
            //console.log( col1, col2, col3, col4);
            if (col1 === col2 && col2 === col3 &&
                col3 === col4 && col1 !== null) {
                return col1;
            }
        }
        for (let row = 5; row >= 0; row--) {
            let col1 = this.columns[0].getTokenAt(row);
            let col2 = this.columns[1].getTokenAt(row - 1);
            let col3 = this.columns[2].getTokenAt(row - 2);
            let col4 = this.columns[3].getTokenAt(row - 3);
            //console.log( col1, col2, col3, col4);
            if (col1 === col2 && col2 === col3 &&
                col3 === col4 && col1 !== null) {
                return col1;
            }
        }
    return 0;
    }
}