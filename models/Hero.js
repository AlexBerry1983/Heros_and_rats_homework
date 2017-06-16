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
  },
  sortTasksByUrgency: function(){
    return _.orderBy(this.tasks, 'urgencyLevel', 'asc');
  },
  sortTasksByRewardAmount: function(){
    return _.orderBy(this.tasks, 'rewardAmount', 'desc');
  },
  viewCompletedTasks: function(){
    completedTasks = []
    for(task of this.tasks){
      if(task.completionStatus === true){
        completedTasks.push(task);
      }
    }
    return completedTasks;
  }
};


module.exports = Hero;
