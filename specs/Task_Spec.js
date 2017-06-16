var assert = require( 'assert' );
var Task = require( '../models/Task.js' );

describe("Task", function() {

  var task1;

  beforeEach(function() {
    task1 = new Task(5, 1, 100);
  });

  it("can get difficulty level", function(){
    assert.strictEqual(5, task1.difficultyLevel)
  });

  it("can get urgency level", function(){
    assert.strictEqual(1, task1.urgencyLevel)
  });

  it("can get reward from a task", function(){
    assert.strictEqual(100, task1.rewardAmount)
  })



})
