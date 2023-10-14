var check_build_script_class = require("../src/check_build_script_class.mjs");

var myObj = new check_build_script_class();
var chai = require("chai");
var expect = chai.expect;

describe ("check_build_script Test Suit | 2023.10.14", function(){
    //test the add function 
    it("001. test case 1", function(){
        expect(myObj.add(1,2)).to.be.equal(3);
    })

    it("002. test case 2", function(){
        expect(myObj.add(4,4)).to.be.equal(8);
    })

    it("003. test case 3", function(){
        expect(myObj.add(50,10)).to.be.equal(60);
    })
});
