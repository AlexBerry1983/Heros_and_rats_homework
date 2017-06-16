var assert = require( 'assert' );
var Hero = require( '../models/Hero.js' );
var Food = require( '../models/Food.js' );
var Task = require( '../models/Task.js' );

describe("Hero", function() {

  var hero;
  var foodItem1;
  var foodItem2;
  var task;
  var task2;
  var task3;

  beforeEach(function(){
    hero = new Hero("Alan", 100, "Steak");
    foodItem1 = new Food("Bread", 5, false);
    foodItem2 = new Food("Steak", 10, false);
    foodItem3 = new Food("Cheese", 5, true);
    task = new Task(5, 1, 100, false);
    task2 = new Task(1, 5, 50, false);
    task3 = new Task(3, 3, 75, true);
  });

  it("can get Hero name", function(){
    assert.strictEqual("Alan", hero.name);
  });

  it("Hero health starts as 100", function(){
    assert.strictEqual(100, hero.health);
  });

  it("can get hero's favourite food", function(){
    assert.strictEqual("Steak", hero.favouriteFood);
  });

  it("hero can say their own name", function(){
    assert.strictEqual("My name is Alan", hero.talk());
  });

  it("hero tasks array starts empty", function(){
    assert.strictEqual(0, hero.countTasks());
  });

  it("hero can increase health by eating", function(){
    hero.eat(foodItem1);
    assert.strictEqual(105, hero.health);
  });

  it("can add 1.5* health for favourite food", function(){
    hero.eat(foodItem2);
    assert.strictEqual(115, hero.health);
  });

  it("can add tasks to hero", function(){
    hero.addTask(task);
    assert.strictEqual(1, hero.countTasks());
  });

  it("can order tasks by difficultyLevel", function(){
    hero.addTask(task2);
    hero.addTask(task);
    assert.deepEqual(([task,task2]), hero.sortTasksByDifficulty());
  });

  it("can order tasks by urgency level", function(){
    hero.addTask(task2);
    hero.addTask(task);
    assert.deepEqual(([task,task2]), hero.sortTasksByUrgency());
  });

  it("can order tasks by reward amount", function(){
    hero.addTask(task2);
    hero.addTask(task);
    assert.deepEqual(([task,task2]), hero.sortTasksByRewardAmount());
  });

  it("can view completed tasks", function(){
    hero.addTask(task);
    hero.addTask(task3);
    assert.deepEqual(([task3]), hero.viewCompletedTasks());
  });

  it("can view incomplete tasks", function(){
    hero.addTask(task);
    hero.addTask(task3);
    assert.deepEqual(([task]), hero.viewInompleteTasks());
  });

  it("can complete tasks", function(){
    hero.addTask(task);
    hero.completeTask(task);
    assert.strictEqual(true, task.completionStatus);
  });

  it("poisoned food reduces hero health", function() {
    hero.eat(foodItem3);
    assert.strictEqual(95, hero.health);
  })




})
