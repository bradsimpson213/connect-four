export class RowWinInspector{
    constructor(columns){
        this.columns = columns;
    }

    inspect() {
        for (let row = 0; row <= 5; row++) {
            let col1 = this.columns[0].getTokenAt(row);
            let col2 = this.columns[1].getTokenAt(row);
            let col3 = this.columns[2].getTokenAt(row);
            let col4 = this.columns[3].getTokenAt(row);
            if (col1 === col2 && col2 === col3 &&
                col3 === col4 && col1 !== null) {
                return col1;
            }
        }
        return 0;
    }
}