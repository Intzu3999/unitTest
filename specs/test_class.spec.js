var test_class = require("../src/test_class.js");

var myObj = new test_class();
var chai = require("chai");
var expect = chai.expect;

describe ("test_class Test Suit | 2023.10.14", function(){
    //test the add function 
    it("013. test case 1", function(){
        expect(myObj.add(1,2)).to.be.equal(3);
    })

    it("014. test case 2", function(){
        expect(myObj.add(4,4)).to.be.equal(8);
    })

    it("015. test case", function(){
        expect(myObj.add(50,10)).to.be.equal(60);
    })
});
