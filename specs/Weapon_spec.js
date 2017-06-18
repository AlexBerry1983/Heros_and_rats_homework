var assert = require('assert');
var Weapon = require( '../models/Weapon');

describe("Weapon", function(){

  var weapon1;

  beforeEach(function(){
    weapon1 = new Weapon("Sword", 10);
  });

  it('can get weapon type', function(){
    assert.strictEqual("Sword", weapon1.type)
  });


  
})
