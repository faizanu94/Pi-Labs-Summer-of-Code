var View = function(Args)
{
  this.name=Args;
//  alert(this.name);
  $(document).ready(function()
  {
    $('#SendButton').click(function()
    {
      if(document.getElementById('Chat').value!="")
      {
        controller.retrieve(new Date().getTime(),document.getElementById('Nickname').value,document.getElementById('Chat').value);
        document.getElementById('Chat').value = "";
      }
      else
        alert("Blank Entry");
    });
  });
};

View.prototype.render = function(Args)
{
  $('.ul').append('<li>[' + new Date(Args.timestamp).getHours() + ':' + new Date(Args.timestamp).getMinutes() + ':' + new Date(Args.timestamp).getSeconds() + '] ' + Args.nick + ': ' + Args.msg + '</li>');
};

var view = new View("View Initialized");