const {add: addAlias, addAndMultiply, subtract} = require('./functions');

function add(){
    console.log("add local method")
}

console.log(add())
console.log(addAlias(1,2))

console.log(addAndMultiply(1,2,3))
console.log(subtract(1,2))