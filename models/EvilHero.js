var _ = require("lodash")

var EvilHero = function(name){
  this.name = name;
}

EvilHero.prototype = {
  fireball: function(hero){
    hero.health -= 20;
  }
}
module.exports = EvilHero;
