var Controller = function()
{


};

Controller.prototype.appendinbox = function(Args,Count)
{
	view.renderinbox(Args,Count);
};

Controller.prototype.appendsent = function(Args)
{
	view.rendersent(Args);
};

Controller.prototype.replier1 = function(Args,Param)
{
  model.replier2(Args,Param);
};

Controller.prototype.replier3 = function(Args)
{
  view.replier4(Args);
};

Controller.prototype.replier6 = function(Args)
{
  view.replier7(Args);
};

var controller = new Controller();