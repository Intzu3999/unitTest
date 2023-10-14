var test_class = require("../src/test.js");

var myObj = new test();
var chai = require("chai");
var expect = chai.expect;

describe ("test class Test Suit | 2023.10.14", function(){
    //test the add function 
    it("013. test case 1", function(){
        expect(myObj.add(1,2)).to.be.equal(3);
    })

    it("014. test case 2", function(){
        expect(myObj.add(4,4)).to.be.equal(8);
    })

    it("015. test case 3", function(){
        expect(myObj.add(50,10)).to.be.equal(60);
    })

});
