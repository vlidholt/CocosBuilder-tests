//
// MainScene class
//
var MainScene = function(){};

MainScene.prototype.onStartTest = function()
{
	var owner = new Owner();
	
	var scene = cc.BuilderReader.loadAsScene("TestScene", owner);
	cc.Director.getInstance().replaceScene(scene);
};

//
// Owner test
//
var Owner = function(){};

// Create callback for timeline
Owner.prototype.onOwnerCallback1 = function()
{
	cc.log("Owner Callback 1");
};

// Create callback for timeline
Owner.prototype.onOwnerCallback2 = function()
{
	cc.log("Owner Callback 2");
};