var Controller = function(Args)
{
  this.name=Args;
//  alert(this.name);
};

Controller.prototype.append = function(Args)
{
  view.render(Args);
};

Controller.prototype.retrieve = function(aa,bb,cc)
{
  model.setdata(aa,bb,cc);
};

var controller = new Controller("Controller Initialized");