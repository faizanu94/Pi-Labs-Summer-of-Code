var Messenger = function(Args)
{
  this.name=Args;
//  alert(this.name);
};

Messenger.prototype.getdata = function()
{
  $.get('http://datastore.asadmemon.com/chat',function(res)
  {
    $('.ul').empty();
    for(var i in res)
    {
      $('.ul').append('<li>[' + new Date(res[i].timestamp).getHours() + ':' + new Date(res[i].timestamp).getMinutes() + ':' + new Date(res[i].timestamp).getSeconds() + '] ' + res[i].nick + ': ' + res[i].msg + '</li>');
    }
  });
};

Messenger.prototype.setdata = function()
{
  if(document.getElementById('Chat').value!="")
  {
    $.ajax(
    {
      url: 'http://datastore.asadmemon.com/chat/'+ new Date().getTime(), 
      type: 'POST', 
      contentType: 'application/json', 
      data: JSON.stringify({timestamp:new Date().getTime(),nick:document.getElementById('Nickname').value,msg:document.getElementById('Chat').value}),
      success:function(res){console.log(res);}
    });
  }
  else
    alert("Blank Entry");
};

var messenger = new Messenger("Welcome to Asynchronous Group Chat");

setInterval(function()
{
  messenger.getdata();
},100);

$(document).ready(function()
{
  $('#SendButton').click(function()
  {
    messenger.setdata();
    document.getElementById('Chat').value = "";
  });
});