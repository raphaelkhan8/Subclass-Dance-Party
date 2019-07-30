const BlinkyDancer = function(top, left, timeBetweenSteps) {
  // import Dancer to make BlinkyDancer an instance of the Dancer supe constructor
  Dancer.call(this, top, left, timeBetweenSteps);
  // this.$node.addClass('blinkyDancer');
  // this.$node = $('<span class="blinkyDancer"></span>');
}

  // Import the methods of the Dancer superclass
  BlinkyDancer.prototype = Object.create(Dancer.prototype);

  // Reset the constructor to of BlinkyDancer to BlinkyDancer
  BlinkyDancer.prototype.constructor = BlinkyDancer;

  // Call the Dancer step method, which repeatedly calls the step method
  BlinkyDancer.prototype.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    Dancer.prototype.step.call(this);
    // Makes BlinkyDancer "blink" on and off
    this.$node.toggle();
  };

window.BlinkyDancer = BlinkyDancer;
