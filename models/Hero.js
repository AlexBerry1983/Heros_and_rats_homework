var _ = require( "lodash" )

var Hero = function(name, health, favouriteFood, magicShield) {
  this.name = name;
  this.health = 100;
  this.favouriteFood = favouriteFood;
  this.tasks = [];
  this.magicShield = false;
  this.weapons = [];
}


Hero.prototype = {
  talk: function(){
    return "My name is " + this.name;
  },
  countTasks: function(){
    return this.tasks.length;
  },
  eat: function(food){
    if(food.poisonStatus === true){
      this.health -= food.replenishmentValue;
    } else if (food.name === this.favouriteFood){
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
  },
  viewInompleteTasks: function() {
    incompleteTasks = []
    this.tasks.forEach(function(task){
      if(task.completionStatus === false){
        incompleteTasks.push(task);
      }
    })
    return incompleteTasks;
  },
  completeTask: function(task) {
    task.completionStatus = true;
  },
  castMagicShield: function() {
    this.magicShield = true;
  },
  countWeapons: function() {
    return this.weapons.length;
  },
  pickUpWeapon: function(weapon){
    this.weapons.push(weapon)
  },
  strikeEnemy: function(weapon, evilHero){
    if(weapon.ensorcelled === true){
      evilHero.health -= weapon.damageValue * 2;
    } else {
      evilHero.health -= weapon.damageValue;
    }
  }



}


module.exports = Hero;
