function check_build_script() {
console.log("this is check_build_script function version 3");
}

function lint() {
console.log("this is lint function version 3");
}

function compile() {
console.log("this is compile function version 3");
}

function pack() {
console.log("this is pack function version 3");
}

function test() {
console.log("this is test function version 3");
}



//const { Builder, By, Key, until} = require('Selenium-webdriver');

//const driver = new Builder().forBrowser('chrome').build();

//unit test function
async function EveUnitTest(){
    try {
        check_build_script();

        try {
            lint();

            try {
                compile();

                try {
                    pack();

                    try {
                        test();
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
        console.log('');
    }
}

EveUnitTest();