var _ = require( "lodash" )

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
  },
  addTask: function(task){
    this.tasks.push(task);
  },
  sortTasksByDifficulty: function(){
    return _.orderBy(this.tasks, 'difficultyLevel', 'desc');
    // return this.tasks.sort( (a,b) => {return a.difficultyLevel - b.difficultyLevel} ).reverse()
  },
  sortTasksByUrgency: function(){
    return _.orderBy(this.tasks, 'urgencyLevel', 'asc');
  }
};


module.exports = Hero;
