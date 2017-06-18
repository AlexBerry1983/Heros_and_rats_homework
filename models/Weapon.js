var Weapon = function(type, damageValue, ensorcelled){
  this.type = type;
  this.damageValue = damageValue;
  this.ensorcelled = ensorcelled;
}

Weapon.prototype = {
  ensorcell: function(){
    this.ensorcelled = true;
  }
}

module.exports = Weapon;
