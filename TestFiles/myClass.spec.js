var myClass = require("../src/myClass.js");
var myObj = new myClass();

describe ("Test Suit Title", function(){
    //test the add function 
    it("Test the add method", function(){
        myObj.add(1,2)
    })
});