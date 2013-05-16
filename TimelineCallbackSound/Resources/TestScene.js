var gLoaded = false;

//
// MainScene class
//
var TestScene = function(){};

// Create callback for timeline
TestScene.prototype.onCallback1 = function()
{	
    // Rotate the label when the button is pressed
    this.helloLabel.runAction(cc.RotateBy.create(1,360));
    this.helloLabel.setString("Callback 1");
};

TestScene.prototype.onCallback2 = function()
{	
    // Rotate the label when the button is pressed
    this.helloLabel.runAction(cc.RotateBy.create(1,-360));
    this.helloLabel.setString("Callback 2");
};
