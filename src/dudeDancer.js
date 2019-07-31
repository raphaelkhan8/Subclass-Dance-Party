const DudeDancer = function(top, left, timeBetweenSteps) {
  // import Dancer to make DudeDancer an instance of the Dancer supe constructor
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.attr('id', 'dude');
  this.$node.append('<img src = "src/images/dude.jpg" alt="fail">');
  // this.$node.addClass('blinkyDancer');
};

// Import the methods of the Dancer superclass
DudeDancer.prototype = Object.create(Dancer.prototype);

// Reset the constructor to of DudeDancer to DudeDancer
DudeDancer.prototype.constructor = DudeDancer;

// Call the Dancer step method, which repeatedly calls the step method
DudeDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  const DudeDancer = this;
  const oldStep = Dancer.prototype.step;
  oldStep.call(DudeDancer);
  // Makes DudeDancer "blink" on and off
  // this.$node.toggle();
};

window.DudeDancer = DudeDancer;
