var View = function()
{
};

View.prototype.renderinbox = function(Args,Count)
{
   document.getElementById('imageloader').style.visibility = "visible";
   document.getElementById('counter').innerHTML = Count;
    var link = document.createElement("a");
  	link.className = "list-group-item";
    link.href="show.html?id=" + Args._id;
    var input = document.createElement("input");
  	input.type = "checkbox";

  	var div1 = document.createElement("div");
  	div1.className = "checkbox";

  	var label = document.createElement("label");

  	label.appendChild(input);
  	div1.appendChild(label);

  	var span2 = document.createElement("span");
    span2.className="name";
    span2.id="person";
  	span2.style.width = "120px";
  	span2.style.display="inline-block";
  	span2.innerHTML=Args.from;
    var Subject = "";
    if(Args.subject.length > 10)
      Subject = Args.subject.substring(0,10);
    else
      Subject = Args.subject.substring(0,Args.subject.length-1);
    var span3 = document.createElement("span");
  	span3.className="";
  	span3.innerHTML='  ' + Subject.bold();
    var Message = "";
    if(Args.msg.length > 15)
      Message = Args.msg.substring(0,15);
    else
      Message = Args.msg.substring(0,Args.msg.length-1);
  	var span4 = document.createElement("span");
  	span4.className="text-muted";
  	span4.style.fontSize="11px";
  	span4.innerHTML='  '+ Message;
  	var span5 = document.createElement("span");
  	span5.className="badge";
  	span5.innerHTML=new Date(Args.timestamp).getHours() + ':' + new Date(Args.timestamp).getMinutes() + ':' + new Date(Args.timestamp).getSeconds();
  	var span6 = document.createElement("span");
  	span6.className="pull-right";
  	var span7 = document.createElement("span");
  	span7.className="glyphicon glyphicon-paperclip";
  	span6.appendChild(span7);
  	link.appendChild(div1);
  	link.appendChild(span2);
  	link.appendChild(span3);
  	link.appendChild(span4);
  	link.appendChild(span5);
    link.appendChild(span6);
    setTimeout(function()
    {
      $('.mailbox1').prepend(link);
      document.getElementById('imageloader').style.visibility = "hidden";
    },1000);
};

View.prototype.rendersent = function(Args)
{
	var link = document.createElement("a");
  	link.href = "#";
  	link.className = "list-group-item";

  	var input = document.createElement("input");
  	input.type = "checkbox";

  	var div1 = document.createElement("div");
  	div1.className = "checkbox";

  	var label = document.createElement("label");

  	label.appendChild(input);
  	div1.appendChild(label);

  	var span1 = document.createElement("span");
  	span1.className="glyphicon glyphicon-star-empty";

  	var span2 = document.createElement("span");
  	span2.className="name";
  	span2.style.width = "120px";
  	span2.style.display="inline-block";
  	span2.innerHTML=Args.to;
  	var span3 = document.createElement("span");
  	span3.className="";
  	span3.innerHTML='  ' + Args.subject;
  	var span4 = document.createElement("span");
  	span4.className="text-muted";
  	span4.style.fontSize="11px";
  	span4.innerHTML='  '+ Args.msg;
  	var span5 = document.createElement("span");
  	span5.className="badge";
  	span5.innerHTML=new Date(Args.timestamp).getHours() + ':' + new Date(Args.timestamp).getMinutes() + ':' + new Date(Args.timestamp).getSeconds();
  	var span6 = document.createElement("span");
  	span6.className="pull-right";
  	var span7 = document.createElement("span");
  	span7.className="glyphicon glyphicon-paperclip";
  	span6.appendChild(span7);
  	link.appendChild(div1);
  	link.appendChild(span1);
  	link.appendChild(span2);
  	link.appendChild(span3);
  	link.appendChild(span4);
  	link.appendChild(span5);
  	link.appendChild(span6);
  	$('.mailbox2').prepend(link);
};

View.prototype.replier = function(Args,Param)
{
  controller.replier1(Args,Param);
};

View.prototype.replier4 = function(Args)
{
  document.getElementById('inputFrom11').value = Args.from;
   document.getElementById('inputBody11').value = Args.msg;
};

View.prototype.replier7 = function(Args)
{
   document.getElementById('inputTo11').value = Args.from;
};

var view = new View();