// Creates and returns a new dancer object that can step
const Dancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.step();
  this.setPosition(top, left);
};
//change
Dancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(() => this.step, this.timeBetweenSteps);
};
// dancer.step();

Dancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  const styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

// now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
// this one sets the position to some random default point within the body
// dancer.setPosition(top, left);



window.Dancer = Dancer;
