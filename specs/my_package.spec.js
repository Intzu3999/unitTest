var package_class = require("../src/my_package.js");

var myObj = new my_package();
var chai = require("chai");
var expect = chai.expect;

describe ("my_package class Test Suit | 2023.10.14", function(){
    //test the add function 
    it("010. test case 1", function(){
        expect(myObj.add(1,2)).to.be.equal(3);
    })

    it("011. test case 2", function(){
        expect(myObj.add(4,4)).to.be.equal(8);
    })

    it("012. test case 3", function(){
        expect(myObj.add(50,10)).to.be.equal(60);
    })
});
