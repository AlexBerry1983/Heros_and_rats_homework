var assert = require( "assert" );
var Food = require( "../models/Food.js" )

describe("Food", function() {

  var foodItem;

  beforeEach(function(){
    foodItem = new Food("Steak");
  });

  it("can get food name", function() {
    assert.strictEqual("Steak", foodItem.name)
  });




})
