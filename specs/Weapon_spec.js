var assert = require('assert');
var Weapon = require( '../models/Weapon');

describe("Weapon", function(){

  var weapon1;

  beforeEach(function(){
    weapon1 = new Weapon("Sword", 10, false, 50);
  });

  it('can get weapon type', function(){
    assert.strictEqual("Sword", weapon1.type)
  });

  it("can get weapon damage value", function(){
    assert.strictEqual(10, weapon1.damageValue)
  });

  it("can get weapon value", function(){
    assert.strictEqual(50, weapon.value);
  });

})
