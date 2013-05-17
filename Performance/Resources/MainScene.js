//
// MainScene class
//
var MainScene = function(){};

// Create callback for button
MainScene.prototype.onPressButton = function()
{
	var dStart = new Date();
	var startTime = dStart.getTime();
	
    // Rotate the label when the button is pressed
    var i;
    for (i = 0; i < 1000; i++)
    {
		var node = cc.BuilderReader.load("BigFile");
    }
    
    var dEnd = new Date();
    var endTime = dEnd.getTime();
    
    cc.log("Test time (ms): " + (endTime - startTime));
};