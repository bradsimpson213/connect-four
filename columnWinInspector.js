
export class ColumnWinInspector {
    constructor(column) {
        this.column = column;
    }

    inspect() {
        for(let row = 0; row <= 2; row++) {
            let row1 = this.column.getTokenAt(row);
            let row2 = this.column.getTokenAt(row + 1);
            let row3 = this.column.getTokenAt(row + 2);
            let row4 = this.column.getTokenAt(row + 3);
            //console.log( row1, row2, row3, row4);
            if (row1 === row2 && row2 === row3 && 
                row3 === row4  && row1 !== null) {
                return row1;
            }
        }
        return 0; 
    }

   
}


