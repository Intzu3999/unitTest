console.log('Version 20231014_4');

import { check_build_script_class } from './check_build_script_class.mjs';
import { compile_class} from './compile_class.mjs';
import { lint_class} from './lint_class.mjs';
import { package_class} from './package_class.mjs';
import { test_class} from './test_class.mjs';
import {check_build_script, lint, compile, pack, test} from './all_functions.mjs';



//const { Builder, By, Key, until} = require('Selenium-webdriver');

//const driver = new Builder().forBrowser('chrome').build();

//unit test function
async function EveUnitTest(){
    try {
        check_build_script_class(); // Call the function

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