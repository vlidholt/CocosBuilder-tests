//
// MainScene class
//
var MainScene = function(){};

// Create callback for button
MainScene.prototype.onPressButton = function()
{
	cc.log("Testing callbacks, should get 3 different values");
	
    this.ref0.controller.onCallback();
    this.ref1.controller.onCallback();
    this.ref2.controller.onCallback();
};