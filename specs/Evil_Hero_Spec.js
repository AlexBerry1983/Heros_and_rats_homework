var assert = require ('assert');
var EvilHero = require('../models/EvilHero.js');
var Hero = require('../models/Hero.js');

describe("EvilHero", function(){

  var evilHero;

  beforeEach(function(){
    evilHero = new EvilHero("Kurtha");
    hero = new Hero("Alan", 100, "Steak");
  });

  it("can get evil hero's name", function(){
    assert.strictEqual("Kurtha", evilHero.name)
  });

  it("can blast hero with fireball", function(){
    evilHero.fireball(hero);
    assert.strictEqual(80, hero.health);
  });

  it("heros magic shield reduces fireball damage to 10", function(){
    hero.castMagicShield();
    evilHero.fireball(hero);
    assert.strictEqual(90, hero.health);
  });
})
