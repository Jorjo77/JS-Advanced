function addAndRemoveElements(array) {
    let result = [];
    for (let index = 0; index < array.length; index++) {
        let element = array[index];
        if (element==='add') {
            result.push(index +1);
        } if (element ==='remove'){
             result.splice(result.length -1, 1);
        } 
    }
if (result.length>0) {
    for (let index = 0; index < result.length; index++) {
        let element = result[index];
        console.log(element);
        //return element;
    }
} else {
   console.log('Empty'); 
   //return 'Empty';
}
}

addAndRemoveElements(['remove', 
'remove', 
'remove']
);