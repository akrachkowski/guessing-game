class GuessingGame {
    constructor() {
        this.min;
        this.max;
        this.result;
        this.middle;
        this.array = [];
    }

    setRange(min, max) {
        this.min = min + 1;
        this.max = max - 1;
    }

    guess() {        
        this.middle = Math.ceil((this.min + this.max) / 2);       
        return this.middle;
    }

    lower() {
        this.max = this.middle - 1;
    }

    greater() {
        this.min = this.middle + 1;
    }
}

module.exports = GuessingGame;
