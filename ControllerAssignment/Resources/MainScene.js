//
// MainScene class
//
var MainScene = function(){};

// Create callback for button
MainScene.prototype.onPressButton = function()
{
    var controller = this.subNode.controller;
    cc.log("Controller: "+controller);
    
    controller.aFunc();
    
};