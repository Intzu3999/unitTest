function check_build_script() {
console.log("this is check_build_script function version2");
}

function lint() {
console.log("this is lint function version2");
}

function compile() {
console.log("this is compile function version2");
}

function pack() {
console.log("this is pack function version2");
}

function test() {
console.log("this is test function version2");
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