var assert = require( 'assert' );
var Hero = require( '../models/Hero.js' );

describe("Hero", function() {

  var hero;

  beforeEach(function(){
    hero = new Hero("Alan");
  });

  it("can get Hero name", function(){
    assert.strictEqual("Alan", hero.name);
  });

  it("Hero health starts as 100", function(){
    assert.strictEqual(100, hero.health);
  });


})
