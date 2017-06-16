var Hero = function(name, health, favouriteFood) {
  this.name = name;
  this.health = 100;
  this.favouriteFood = favouriteFood;
}


Hero.prototype = {
  talk: function(){
    return "My name is " + this.name;
  }
};


module.exports = Hero;
