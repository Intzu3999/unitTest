var lint = require("../src/lint.js");

var myObj = new lint();
var chai = require("chai");
var expect = chai.expect;

describe ("lint class Test Suit", function(){
    //test the multiply function 
    it("3.1 test case Multiply", function(){
        expect(myObj.multiply(1,2)).to.be.equal(2);
    })

    it("3.2 test case Multiply", function(){
        expect(myObj.multiply(4,4)).to.be.equal(16);
    })

    it("3.3 test case Multiply", function(){
        expect(myObj.multiply(20,2)).to.be.equal(40);
    })
});