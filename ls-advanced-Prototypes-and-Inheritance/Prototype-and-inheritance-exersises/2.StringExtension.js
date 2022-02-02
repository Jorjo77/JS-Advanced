(function solve() {
    String.prototype.ensureStart = function (string) {

        if (!this.startsWith(string)) {

            return `${string}${this}`;
        }
        return this.toString();
    };

    String.prototype.ensureEnd = function (string) {

        if (!this.endsWith(string)) {

            return `${this}${string}`;;
        }
        return this.toString();
    };

    String.prototype.isEmpty = function () {

        if (this.length === 0) {

            return true;
        }
        return false;
    };

    String.prototype.truncate = function (n) {

        if (this.length <= n) {
            return this.toString();
        }

        if (this.includes(' ')) {
            let words = this.split(' ');

            do {
                words.pop();
            } while (words.join(' ').length + 3 > n)
            let result = `${words.join(' ')}...`;
            return result;
        }

        if (n > 3) {
            let string = `${this.slice(0, n - 3)}...`;
            return string;
        }

        return '.'.repeat(n);

    }

    String.format = function (string, ...params) {
        for (let index = 0; index < params.length; index++) {
            if (string.includes(`${index}`)) {
                string = string.replace(`{${index}}`, params[index]);
            }

        }

        return string;
    };
    //Идва ми неразбираемо с този РЕГЕКС, това горе е по-ясно !!!
    // String.format = function (string, ...params) {
    //     let replaceRegex = /{(\d+)}/g;
    //     let replacedString = string.replace(replaceRegex, (match, group1) => {
    //         let index = Number(group1);
    //         if (params[index] !== undefined) {
    //             return params[index];
    //         }
    //         return match;
    //     });
    // };

})()

let str = 'my string';
str = str.ensureStart('my');
str = str.ensureStart('hello ');
str = str.truncate(16);
str = str.truncate(14);
str = str.truncate(8);
console.log(str.truncate(4));
str = str.truncate(2);


str = String.format('The {0} {1} fox',
    'quick', 'brown');
console.log(str);
str = String.format('jumps {0} {1}',
    'dog');
console.log(str);
