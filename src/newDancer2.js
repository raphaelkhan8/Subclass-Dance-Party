const NewDancer2 = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('newDancer2');
  this.$node.append('<img src = "https://pics.me.me/thumb_fallout-reactor-cc-create-meme-screaming-man-in-the-mountains-jimmy-barnes-50336709.png" alt="fail" border="0">');
};

NewDancer2.prototype = Object.create(Dancer.prototype);
NewDancer2.prototype.constructor = NewDancer2;

NewDancer2.prototype.step = function () {
  Dancer.prototype.step.call(this);
  // this.$node.toggle();
};

window.NewDancer2 = NewDancer2;