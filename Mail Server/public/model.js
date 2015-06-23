var Model = function()
{
	this.lasttimestamp1 = 0;
	this.lasttimestamp2 = 0;
	var that = this;
	setInterval(function()
  	{
  		$.get('/getinbox',function(res)
  		{
			for(var i in res)
			{
				if(res[i].timestamp > that.lasttimestamp1)
  				{
  					controller.appendinbox(res[i],res.length);
					that.lasttimestamp1 = res[i].timestamp;
  				}
			}
		});

		$.get('/getsent',function(res)
  		{
			for(var i in res)
			{
				if(res[i].timestamp > that.lasttimestamp2)
  				{
  					controller.appendsent(res[i]);
					that.lasttimestamp2 = res[i].timestamp;
  				}
			}
		})},1000);

};

Model.prototype.replier2 = function(Args,Param)
{
  		$.get('/getmessageandfrom/' + Args, function(res)
  		{
  			if(Param == 0)
  				controller.replier3(res);
  			else
  				controller.replier6(res);
		});
};

var model = new Model();