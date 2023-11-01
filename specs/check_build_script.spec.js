var check_build_script = require("../src/check_build_script.js");

var myObj = new check_build_script();
var chai = require("chai");
var expect = chai.expect;

describe ("check_build_script class Test Suit | 2023.10.14", function(){
    //test the add, multiply, divide, square, cube function in check_build_script class
    it("1.1 test case Add", function(){
        expect(myObj.add(5,3)).to.be.equal(8);
    })

    it("1.2 test case Multiply", function(){
        expect(myObj.multiply(5,3)).to.be.equal(15);
    })

    it("1.3 test case Divide", function(){
        expect(myObj.divide(5,5)).to.be.equal(1);
    })

    it("1.4 test case Square", function(){
        expect(myObj.square(5)).to.be.equal(25);
    })

    it("1.5 test case Cube", function(){
        expect(myObj.cube(5)).to.be.equal(625);
    })
});
