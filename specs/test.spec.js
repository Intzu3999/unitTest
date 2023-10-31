var test = require("../src/test.js");

var myObj = new test();
var chai = require("chai");
var expect = chai.expect;

describe ("test class Test Suit | 2023.10.14", function(){
    //test the add function 
    it("5.1 test case Add", function(){
        expect(myObj.add(1,2)).to.be.equal(3);
    })

    it("5.2 test case Add", function(){
        expect(myObj.add(4,4)).to.be.equal(8);
    })

    it("5.3 test case Add", function(){
        expect(myObj.add(50,10)).to.be.equal(60);
    })

});
