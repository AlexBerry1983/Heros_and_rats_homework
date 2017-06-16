var Rat = function(){

}

Rat.prototype = {
  poisonFood: function(food){
    food.poisonStatus = true;
  }
}

module.exports = Rat;
