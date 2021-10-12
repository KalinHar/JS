(function solve() {
    String.prototype.ensureStart = function (str) {
        if (this.slice(0, str.length) == str) {
            return `${this}`;
        }
        return `${str}${this}`;
    };
    String.prototype.ensureEnd = function (str) {
        if (this.slice(- str.length) == str) {
            return `${this}`;
        }
        return `${this}${str}`;

    };
    String.prototype.isEmpty = function () {
        return this.length == 0;
    };
    String.prototype.truncate = function (n) {
        if (n <= 3) {
            return ".".repeat(n);
        }
        if (this.toString().length <= n) {
            return this.toString();
        } else {
            let lastIndex = this.toString().substr(0, n - 2).lastIndexOf(" ");
            if (lastIndex != -1) {
                return this.toString().substr(0, lastIndex) + "...";
            } else {
                return this.toString().substr(0, n - 3) + "...";
            }
        }
        // if (this.length <= n) {
        //     return `${this}`;
        // }
        // let res = this.slice(0, n);
        // res = res.split(' ');
        // console.log(res);
        // if (res.length > 1) {
        //     res.pop();
        //     return res.join(' ') + '...';
        // }
        // if (n >= 4) {
        //     res = res[0].slice(0, n - 3);
        //     return res + '...';
        // }
        // return '.'.repeat(n);
    };

    String.format = function (string, ...params) {
        let words = params;
        let regex = /{\d+}/;
        while (regex.test(string) && words.length != 0) {
            string = string.replace(regex, words.shift())
        }
        return string;
    };

})();

let str = 'my string';
str = str.ensureStart('my');
str = str.ensureStart('hello ');
// str = str.truncate(16);
// str = str.truncate(9);
str = str.truncate(6);
console.log(str);
str = str.truncate(4);
str = str.truncate(2);
str = String.format('The {0} {1} fox',
    'quick', 'brown');
// str = String.format('jumps {0} {1}',
//   'dog');

