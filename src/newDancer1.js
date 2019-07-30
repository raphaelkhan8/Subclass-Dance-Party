const NewDancer1 = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('newDancer1');
  this.$node.append('<img src = "https://i.ibb.co/fMPNgfm/rsz-oreo-belly.jpg" alt="fail" border="0">');
};

NewDancer1.prototype = Object.create(Dancer.prototype);
NewDancer1.prototype.constructor = NewDancer1;

NewDancer1.prototype.step = function () {
  Dancer.prototype.step.call(this);
  // this.$node.toggle();
};

window.NewDancer1 = NewDancer1;