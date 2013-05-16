//
// MainScene class
//
var MainScene = function(){};

MainScene.prototype.onDidLoadFromCCB = function()
{
	// Load layer with owner (owner is this class)
	var menu = cc.BuilderReader.load("LayerWithOwner", this);
	this.rootNode.addChild(menu, 10);
};

// Create callback for button
MainScene.prototype.onPressButton = function()
{	
    // Rotate the label when the button is pressed
    this.helloLabel.runAction(cc.RotateBy.create(1,360));
};

MainScene.prototype.onClickedButton = function()
{
	cc.log("Clicked button!");
};
