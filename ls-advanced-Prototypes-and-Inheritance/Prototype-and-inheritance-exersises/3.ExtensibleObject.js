function extensibleObject() {
    let proto = {};

    let myObj = Object.create(proto);

    myObj.extend = function(templateObj) {
        for (const key in templateObj) {

            if (typeof templateObj[key] === 'function') {
                let proto = Object.getPrototypeOf(this);
                proto[key] = templateObj[key];
            } else {
                this[key] = templateObj[key];
            }
        }
    } 
    return myObj;
}

const myObj = extensibleObject();

const template = {
    extensionMethod: function () {},
    extensionProperty: 'someString'
}
myObj.extend(template);