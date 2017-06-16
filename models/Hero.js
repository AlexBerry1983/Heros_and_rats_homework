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
  },
  eat: function(food){
    if (food.name === this.favouriteFood){
      this.health += food.replenishmentValue * 1.5;
    } else {
      this.health += food.replenishmentValue;
    }
  }
};


module.exports = Hero;
