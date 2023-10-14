var lint_class = require("../src/lint_class.js");

var myObj = new lint_class();
var chai = require("chai");
var expect = chai.expect;

describe ("lint_class Test Suit", function(){
    //test the multiply function 
    it("004. test case 1", function(){
        expect(myObj.multiply(1,2)).to.be.equal(2);
    })

    it("005. test case 2", function(){
        expect(myObj.multiply(4,4)).to.be.equal(16);
    })

    it("006. test case 3 with a false result", function(){
        expect(myObj.multiply(20,2)).to.be.equal(40);
    })
});