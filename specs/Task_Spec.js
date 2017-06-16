var assert = require( 'assert' );
var Task = require( '../models/Task.js' );

describe("Task", function() {

  var task1;

  beforeEach(function() {
    task1 = new Task(5);
  });

  it("can get difficulty level", function(){
    assert.strictEqual(5, task1.difficultyLevel)
  });




})
