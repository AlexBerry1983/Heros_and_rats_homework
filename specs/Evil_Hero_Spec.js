var assert = require ('assert');
var EvilHero = require('../models/EvilHero.js');

describe("EvilHero", function(){

  var evilHero;

  beforeEach(function(){
    evilHero = new EvilHero("Kurtha");
  });

  it("can get evil hero's name", function(){
    assert.strictEqual("Kurtha", evilHero.name)
  })
})
