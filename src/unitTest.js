console.log('Version 20231011_2');

function check_build_script() {
console.log('this is check_build_script function');
}

function lint() {
console.log("this is lint function");
}

function compile() {
console.log("this is compile function");
}

function pack() {
console.log("this is pack function");
}

function test() {
console.log("this is test function");
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