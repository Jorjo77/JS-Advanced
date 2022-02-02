function solution(arrOfComands) {
    let command = '';
    let strToAdd = '';
    let strArr = [];
    for (const element of arrOfComands) {
        let splitedElement = element.split(' ');
        command = splitedElement[0];
        strToAdd = splitedElement[1];

        function add(strToAdd) {
            strArr.push(strToAdd);
        };
        function remove(strToRemove) {
            for (let index = 0; index < strArr.length; index++) {
                let element = strArr[index];
                if (element === strToRemove) {
                    strArr.splice(index, 1);
                }
            }
        };
        function print() {
            console.log(strArr.join(','));
        };

        let processor = {
            add,
            remove,
            print
        }
        processor[command](strToAdd);
    }
}

let firstTest = ['add pesho', 'add george', 'add peter', 'remove peter','print'];
solution(firstTest);