var SubNode = function(){};

SubNode.prototype.onDidLoadFromCCB = function()
{
	cc.log("SubNode loaded");
};

SubNode.prototype.aFunc = function()
{
	cc.log("Called aFunc");
};
