var assert = require( 'assert' );
var WanderingWizard = require( '../models/WanderingWizard.js');
var Weapon = require( '../models/Weapon.js');

describe("WanderingWizard", function() {

  beforeEach(function(){
    wizard = new WanderingWizard()
    weapon = new Weapon("Sword", 10, false)
  })

  it("can ensorcell weapon", function(){
    wizard.ensorcellWeapon(weapon);
    assert.strictEqual(true, weapon.ensorcelled);
  })


})
