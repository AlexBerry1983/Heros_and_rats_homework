var _ = require("lodash")

var EvilHero = function(name){
  this.name = name;
}

EvilHero.prototype = {
  fireball: function(hero) {
    if(hero.magicShield === false) {
      hero.health -= 20;
    } else {
      hero.health -=10;
    }
  }
}
module.exports = EvilHero;
