const makeBlinkyDancer = function (top, left, timeBetweenSteps) {
  const blinkyDancer = makeDancer(top, left, timeBetweenSteps);

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

// const oldStep = blinkyDancer.step;

  blinkyDancer.step = function () {
    // call the old version of step at the beginning of any call to this new version of step
    oldStep();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    blinkyDancer.$node.toggle();
  };

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};

window.makeBlinkyDancer = makeBlinkyDancer;





// const BlinkyDancer = function(top, left, timeBetweenSteps) {
//   // import Dancer to make BlinkyDancer an instance of the Dancer supe constructor
//   Dancer.call(this, top, left, timeBetweenSteps);
//   // this.$node.addClass('blinkyDancer');
// }

//   // Import the methods of the Dancer superclass
//   BlinkyDancer.prototype = Object.create(Dancer.prototype);

//   // Reset the constructor to of BlinkyDancer to BlinkyDancer
//   BlinkyDancer.prototype.constructor = BlinkyDancer;

//   // Call the Dancer step method, which repeatedly calls the step method
//   BlinkyDancer.prototype.step = function() {
//     // call the old version of step at the beginning of any call to this new version of step
//     const BlinkyDancer = this;
//     const oldStep = Dancer.prototype.step;
//     oldStep.call(BlinkyDancer);
//     // Makes BlinkyDancer "blink" on and off
//     this.$node.toggle();
//   };

// window.BlinkyDancer = BlinkyDancer;
