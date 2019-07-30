// Creates and returns a new dancer object that can step
<<<<<<< HEAD
const Dancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
=======
const makeDancer = function (top, left, timeBetweenSteps) {
  const dancer = {};

>>>>>>> 5fcdc730b0dae5b9b087d08b613d9314d0e3f987
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

<<<<<<< HEAD
Dancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  const styleSettings = {
    top: top,
    left: left
=======
  dancer.step = function () {
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    setTimeout(dancer.step, timeBetweenSteps);
>>>>>>> 5fcdc730b0dae5b9b087d08b613d9314d0e3f987
  };
  this.$node.css(styleSettings);
};

<<<<<<< HEAD
// now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
// this one sets the position to some random default point within the body
// dancer.setPosition(top, left);
=======
  dancer.setPosition = function (top, left) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    const styleSettings = {
      top: top,
      left: left
    };
    dancer.$node.css(styleSettings);
  };
>>>>>>> 5fcdc730b0dae5b9b087d08b613d9314d0e3f987



<<<<<<< HEAD
window.Dancer = Dancer;
=======
window.makeDancer = makeDancer;



// // Creates and returns a new dancer object that can step
// const Dancer = function(top, left, timeBetweenSteps) {
//   // use jQuery to create an HTML <span> tag
//   this.$node = $('<span class="dancer"></span>');
//   this.top = top;
//   this.left = left;
//   this.timeBetweenSteps = timeBetweenSteps;
//   this.step();
//   this.setPosition(top, left);
// }


//   Dancer.prototype.step = function() {
//     // the basic dancer doesn't do anything interesting at all on each step,
//     // it just schedules the next step
//     const dancerObj = this;
//     setTimeout(() => this.step.call(dancerObj), this.timeBetweenSteps);
//   };

//   Dancer.prototype.setPosition = function(top, left) {
//     // Use css top and left properties to position our <span> tag
//     // where it belongs on the page. See http://api.jquery.com/css/
//     //
//     const styleSettings = {
//       top: top,
//       left: left
//     };
//     this.$node.css(styleSettings);
//   };

// Dancer.prototype.lineUp = function() {
//   var styleSettings = {
//     left: 0,
//   };
//   this.$node.css(styleSettings);
// };

// // Moves all dancers to a new random position
// Dancer.prototype.breakLine = function() {
//   // Call setPosition with random X and Y coordinates
//   this.setPosition($('body').height() * Math.random(), $('body').width() * Math.random());
// };


//   // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
//   // this one sets the position to some random default point within the body
//   // dancer.setPosition(top, left);

// window.Dancer = Dancer;
>>>>>>> 5fcdc730b0dae5b9b087d08b613d9314d0e3f987
