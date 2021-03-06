var assert = require( "assert" );
var Food = require( "../models/Food.js" );

describe("Food", function() {

  var foodItem;

  beforeEach(function(){
    foodItem = new Food("Steak", 10, false);
  });

  it("can get food name", function() {
    assert.strictEqual("Steak", foodItem.name)
  });

  it("can get nutrition value from food", function(){
    assert.strictEqual(10, foodItem.replenishmentValue)
  });

  it("can get poison status", function() {
    assert.strictEqual(false, foodItem.poisonStatus);
  });




})
