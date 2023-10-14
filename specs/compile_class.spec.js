var compile_class = require("../src/compile_class.js");

var myObj = new compile_class();
var chai = require("chai");
var expect = chai.expect;

describe ("compile_class Test Suit | 2023.10.14", function(){
    //test the add function 
    it("007. test case 1", function(){
        expect(myObj.add(1,2)).to.be.equal(3);
    })

    it("008. test case 2", function(){
        expect(myObj.add(4,4)).to.be.equal(8);
    })

    it("009. test case 3", function(){
        expect(myObj.add(50,10)).to.be.equal(60);
    })
});
