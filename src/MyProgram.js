class check_build_script {
    constructor() {
    console.log("initiate check_build_script class");
    }
    //this is method add | for adding vars: num1 and num2
    add(num1, num2){
        var result = num1 + num2;
        return result;
    }     
}


class compile {
    constructor() {
    console.log("initiate compile class");
    }
    //this is method add | for adding vars: num1 and num2
    add(num1, num2){
        var result = num1 + num2;
        return result;
    }      
}


class lint { 
    constructor() {
    console.log("initiate lint class");
    }
    //this is method add | for adding vars: num1 and num2
    multiply(num1, num2){
        var result = num1 * num2;
        return result;
    }    
}


class my_package {  
    constructor() {
    console.log("initiate package class");
    }
    //this is method add | for adding vars: num1 and num2
    add(num1, num2){
        var result = num1 + num2;
        return result;
    }   
}

class test {   
    constructor() {
    console.log("initiate test class");
    }
    //this is method add | for adding vars: num1 and num2
    add(num1, num2){
        var result = num1 + num2;
        return result;
    }     
}


//this is my program
async function EveProgram(){
    try {
        const myInstance = new check_build_script(); // Call the class

        try {
            const myInstance = new compile();

            try {
                const myInstance = new lint();

                try {
                    const myInstance = new my_package();

                    try {
                        const myInstance = new test();
                    } catch (e) {
                        console.log(e)
                    }

                } catch (e) {
                    console.log(e)
                }

            } catch (e) {
                console.log(e)
            }

        } catch (e) {
            console.log(e)
        }   
        
    } catch (e) {
        console.log(e)
    } 
    
    finally {
        console.log('try-catch has reach the end');
    }
}

EveProgram();