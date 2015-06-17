var Array = [];
var Array1 = [];

$(document).ready(function()
{
  $('#ClickButton').click(function()
  {
    $('.ul').append('<li class="NonStriked" onClick="Striker(this)" data-id=' + Array.length + '><input type="checkbox">'+ ' ' + document.getElementById('InputBox').value +'</li>');
    Array.push({text:document.getElementById('InputBox').value,id:Array.length,state:true});
    document.getElementById('InputBox').value = "";
  });
});

function Striker(Args)
{
  if(Args.className=="NonStriked")
  {
    Args.style.setProperty("text-decoration","line-through"); 
    Args.className="Striked";
    Array[Args.getAttribute("data-id")].state = false;
  }
  else
  {
    Args.style.setProperty("text-decoration","none"); 
    Args.className="NonStriked";
    Array[Args.getAttribute("data-id")].state = true;
  }
}