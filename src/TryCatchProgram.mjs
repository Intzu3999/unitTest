console.log('Version 20231014_2');

import { check_build_script, check_build_script_class } from './check_build_script_class.mjs';


//const { Builder, By, Key, until} = require('Selenium-webdriver');

//const driver = new Builder().forBrowser('chrome').build();

//unit test function
async function EveUnitTest(){
    try {
        check_build_script(); // Call the function
        const instance = new check_build_script_class(); // Create an instance of the class

        try {
            lint_class();

            try {
                compile_class();

                try {
                    package_class();

                    try {
                        test_class();
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

EveUnitTest();