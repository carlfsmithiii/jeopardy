class JeopardyGrid extends Grid {
    constructor(parentNode, categoryList, moneyIncrement = 200) {
        super({
            rowCount: 6,
            columnCount: 6,
            parentNode: parentNode
        });
        this.moneyIncrement = moneyIncrement;
        this.categoryList = categoryList;
    }
    _createCell(options) {
        return new JeopardyCell(options, this.moneyIncrement, this.categoryList);
    }

}

class JeopardyCell extends Cell {
    constructor({row, column, cellOptions}, dollarMultiplier, questionList) {
        super({row, column, cellOptions});
        this.dollarAmount = this.row * dollarMultiplier;
        this.category = 
        this.question = this._
    }
}