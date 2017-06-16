var assert = require( 'assert' );
var Hero = require( '../models/Hero.js' );

describe("Hero", function() {

  var hero;

  beforeEach(function(){
    hero = new Hero("Alan", 100, "Mead");
  });

  it("can get Hero name", function(){
    assert.strictEqual("Alan", hero.name);
  });

  it("Hero health starts as 100", function(){
    assert.strictEqual(100, hero.health);
  });

  it("can get hero's favourite food", function(){
    assert.strictEqual("Mead", hero.favouriteFood);
  });


})
