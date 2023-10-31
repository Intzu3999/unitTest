class my_package {  
    constructor() {
    console.log("initiate my_package class");
    }
    //this is method add | for adding vars: num1 and num2
    divide(num1, num2){
        var result = num1 / num2;
        return result;
    }   
}
module.exports = my_package;