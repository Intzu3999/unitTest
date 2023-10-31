var my_package = require("../src/my_package.js");

var myObj = new my_package();
var chai = require("chai");
var expect = chai.expect;

describe ("my_package class Test Suit | 2023.10.14", function(){
    //test the divide function 
    it("4.1 test case Divide", function(){
        expect(myObj.divide(10,2)).to.be.equal(5);
    })

    it("4.2 test case Divide", function(){
        expect(myObj.divide(4,4)).to.be.equal(1);
    })

    it("4.3 test case Divide", function(){
        expect(myObj.divide(50,10)).to.be.equal(5);
    })
});
