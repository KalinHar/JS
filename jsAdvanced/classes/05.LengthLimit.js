class Stringer {
    constructor(str, len) {
        this.innerString = str;
        this._innerLength = len;
    }

    get innerLength() {
        return this._innerLength;
    }

    set innerLength(value) {
        if (value < 0) {
            this._innerLength = 0;
        }else {
            this._innerLength = value
        }
    }

    increase(length) {
        this.innerLength += length;
    }

    decrease(length) {
        this.innerLength -= length;
    }

    toString() {
        if (this.innerString.length > this.innerLength) {
            return this.innerString.slice(0, this.innerLength) + '...';
        }
        return this.innerString;
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test
