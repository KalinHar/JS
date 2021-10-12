function extensibleObject() {
    function extend(temp) {
        
    }
    return {
        extend
    }
}
const myObj = extensibleObject();

const template = {
    extensionMethod: function () { },
    extensionProperty: 'someString'
}
myObj.extend(template);
