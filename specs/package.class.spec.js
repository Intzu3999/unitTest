var package_class = require("../src/package_class.js");

var myObj = new package_class();
var chai = require("chai");
var expect = chai.expect;

describe ("package_class Test Suit | 2023.10.14", function(){
    //test the add function 
    it("010. add method test case 1", function(){
        expect(myObj.add(1,2)).to.be.equal(3);
    })

    it("011. add method test case 2", function(){
        expect(myObj.add(4,4)).to.be.equal(8);
    })

    it("012. add method test case 3", function(){
        expect(myObj.add(50,10)).to.be.equal(60);
    })
});
