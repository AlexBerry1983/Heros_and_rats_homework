var Hero = function(name, health, favouriteFood) {
  this.name = name;
  this.health = 100;
  this.favouriteFood = favouriteFood;
  this.tasks = [];
}


Hero.prototype = {
  talk: function(){
    return "My name is " + this.name;
  },
  countTasks: function(){
    return this.tasks.length;
  }
};


module.exports = Hero;
