var Model = function(Args)
{
  this.name=Args;
//  alert(this.name);
  this.lastTimestamp = 0; 
  var that = this;
  setInterval(function()
  {
    that.getdata();
  },1000);
};

Model.prototype.getdata = function()
{
  var that = this;
  $.get('http://datastore.asadmemon.com/faizanu94',function(res)
  {
    for(var i in res)
    {
      if(res[i].timestamp > that.lastTimestamp )
        controller.append(res[i]);
    }
    that.lastTimestamp = i;
  });
};

Model.prototype.setdata = function(a,b,c)
{
  $.ajax(
  {
    url: 'http://datastore.asadmemon.com/faizanu94/'+ new Date().getTime(), 
    type: 'POST', 
    contentType: 'application/json', 
    data: JSON.stringify({timestamp:a,nick:b,msg:c}),
    success:function(res){console.log(res);}
  });
};

var model = new Model("Model Initialized");