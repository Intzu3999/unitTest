class check_build_script {
    constructor() {
    console.log("initiate check_build_script class");
    }
    //this is method add | for adding vars: num1 and num2
    add(num1, num2){
        var result = num1 + num2;
        return result;
    }    
    
    multiply(num3, num4){
        var result = num3 + num4;
        return result;
    }     
    
    square(num5){
        var result = num5 * num5;
        return result;
    }  

    cube(num6){
        var result = num6 * num6;
        return result;
    }  
        
    divide(num7, num8){
        var result = num7 / num8;
        return result;
    }     
}
module.exports = check_build_script;
