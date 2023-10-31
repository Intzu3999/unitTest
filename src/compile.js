class compile {
    constructor() {
    console.log("initiate compile class");
    }
    //this is method add | for adding vars: num1 and num2
    subtract(num1, num2){
        var result = num1 + num2;
        return result;
    }   
}
module.exports = compile;
