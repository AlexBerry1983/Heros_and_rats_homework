var Task = function(difficultyLevel, urgencyLevel, rewardAmount, completionStatus){
  this.difficultyLevel = difficultyLevel;
  this.urgencyLevel = urgencyLevel;
  this.rewardAmount = rewardAmount;
  this.completionStatus = completionStatus;
};



module.exports = Task;
