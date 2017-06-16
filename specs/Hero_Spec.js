var assert = require( 'assert' );
var Hero = require( '../models/Hero.js' );
var Food = require( '../models/Food.js' );

describe("Hero", function() {

  var hero;
  var foodItem1;
  var foodItem2;

  beforeEach(function(){
    hero = new Hero("Alan", 100, "Steak");
    foodItem1 = new Food("Bread", 5);
    foodItem2 = new Food("Steak", 10);
  });

  it("can get Hero name", function(){
    assert.strictEqual("Alan", hero.name);
  });

  it("Hero health starts as 100", function(){
    assert.strictEqual(100, hero.health);
  });

  it("can get hero's favourite food", function(){
    assert.strictEqual("Steak", hero.favouriteFood);
  });

  it("hero can say their own name", function(){
    assert.strictEqual("My name is Alan", hero.talk());
  });

  it("hero tasks array starts empty", function(){
    assert.strictEqual(0, hero.countTasks());
  });

  it("hero can increase health by eating", function(){
    hero.eat(foodItem1);
    assert.strictEqual(105, hero.health);
  });

  it("can add 1.5* health for favourite food", function(){
    hero.eat(foodItem2);
    assert.strictEqual(115, hero.health);
  })



})
