const JimmyDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.append('<img src = "https://thumbs.gfycat.com/CompleteGrippingHalicore-max-1mb.gif" alt="fail">');
};

JimmyDancer.prototype = Object.create(Dancer.prototype);
JimmyDancer.prototype.constructor = JimmyDancer;

JimmyDancer.prototype.step = function() {
  const JimmyDancer = this;
  const oldStep = Dancer.prototype.step;
  oldStep.call(JimmyDancer);
  // this.$node.toggle();
};

window.JimmyDancer = JimmyDancer;