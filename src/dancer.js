// Creates and returns a new dancer object that can step
const Dancer = function(top, left, timeBetweenSteps) {
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
};


Dancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  const dancerObj = this;
  setTimeout(() => this.step.call(dancerObj), this.timeBetweenSteps);
};

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

Dancer.prototype.lineUp = function() {
  var styleSettings = {
    left: 0,
  };
  this.$node.css(styleSettings);
};

// // Moves all dancers to a new random position
// Dancer.prototype.breakLine = function() {
//   // Call setPosition with random X and Y coordinates
//   this.setPosition($('body').height() * Math.random(), $('body').width() * Math.random());
// };


//   // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
//   // this one sets the position to some random default point within the body
//   // dancer.setPosition(top, left);

window.Dancer = Dancer;
