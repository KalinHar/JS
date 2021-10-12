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
        if (this.length <= n) {
            return `${this}`;
        }
        let res = this.slice(0, n);
        res = res.split(' ');
        if (res.length > 1) {
            res.pop();
            return res.join(' ') + '...';
        }
        if (n >= 4) {
            res = res[0].slice(0, n - 3);
            return res + '...';
        }
        return '.'.repeat(n);
    };
    
    // String.prototype.format = function (string, ...params) {
    //     let words = params;
    //     let regex = /{\d+}/;
    //     while (regex.test(string) && words.length != 0) {
    //         string = string.replace(regex, words.shift())
    //     }
    //     return string;
    // };
    
})();

let str = 'my string';
str = str.ensureStart('my');
str = str.ensureStart('hello ');
str = str.truncate(16);
str = str.truncate(14);
console.log(str);
str = str.truncate(8);
str = str.truncate(4);
str = str.truncate(2);
str = String.format('The {0} {1} fox',
  'quick', 'brown');
// str = String.format('jumps {0} {1}',
//   'dog');

