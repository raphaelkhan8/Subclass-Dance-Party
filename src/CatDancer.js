const CatDancer = function (top, left, timeBetweenSteps) {
  // call the Dancer constructor when CatDancer is invoked
  Dancer.call(this, top, left, timeBetweenSteps);
  // append the cat image to each CatDancer
  this.$node.addClass('catdancer');
  this.$node.append('<img src = "https://i.ibb.co/fMPNgfm/rsz-oreo-belly.jpg" alt="fail">');
};

CatDancer.prototype = Object.create(Dancer.prototype);
CatDancer.prototype.constructor = CatDancer;

CatDancer.prototype.step = function() {
  const CatDancer = this;
  const oldStep = Dancer.prototype.step;
  oldStep.call(CatDancer);
  // this.$node.toggle();
};

window.CatDancer = CatDancer;