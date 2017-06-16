var assert = require('assert');
var Rat = require('../models/Rat.js');
var Food = require('../models/Food.js');

describe("Rat", function(){

  var rat;
  var foodItem;

  beforeEach(function(){
    rat = new Rat();
    foodItem = new Food("Steak", 10, false);
  })

  it('check rat can poison food', function(){
    rat.poisonFood(foodItem);
    assert.strictEqual(true, foodItem.poisonStatus)
  })
})
