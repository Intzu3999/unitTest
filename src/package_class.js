class package_class {  
    constructor() {
    console.log("initiate");
    }
    //this is method add | for adding vars: num1 and num2
    add(num1, num2){
        var result = num1 + num2;
        return result;
    }   
}
module.exports = package_class;