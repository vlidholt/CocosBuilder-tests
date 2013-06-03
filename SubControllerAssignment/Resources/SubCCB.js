//
// SubCCB class
//
var SubCCB = function(){};

// Create callback for button
SubCCB.prototype.onCallback = function()
{	
    var pos = this.rootNode.getPosition();
    
    cc.log("Position x: "+ pos.x);
};