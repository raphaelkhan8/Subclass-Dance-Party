const WalterDancer = function(top, left, timeBetweenSteps) {
  // import Dancer to make WalterDancer an instance of the Dancer supe constructor
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.attr('id', 'walter');
  this.$node.append('<img src = "src/images/walter.jpg" alt="fail">');
  // this.$node.addClass('blinkyDancer');
};

// Import the methods of the Dancer superclass
WalterDancer.prototype = Object.create(Dancer.prototype);

// Reset the constructor to of WalterDancer to WalterDancer
WalterDancer.prototype.constructor = WalterDancer;

// Call the Dancer step method, which repeatedly calls the step method
WalterDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  const WalterDancer = this;
  const oldStep = Dancer.prototype.step;
  oldStep.call(WalterDancer);
  // Makes WalterDancer "blink" on and off
  // this.$node.toggle();
};

window.WalterDancer = WalterDancer;
