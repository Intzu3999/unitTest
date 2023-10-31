var compile = require("../src/compile.js");

var myObj = new compile();
var chai = require("chai");
var expect = chai.expect;

describe ("compile class Test Suit | 2023.10.14", function(){
    //test the subtract function 
    it("2.1 test case subtract", function(){
        expect(myObj.subtract(5,3)).to.be.equal(2);
    })

    it("2.2 test case subtract", function(){
        expect(myObj.subtract(50,30)).to.be.equal(20);
    })

    it("2.3 test case subtract", function(){
        expect(myObj.subtract(50,10)).to.be.equal(40);
    })

});
