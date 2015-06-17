function Fetch()
{
//  Array1 = JSON.parse(localStorage.Data);
  $.get('http://datastore.asadmemon.com/faizanu94',function(res)
  {
    Array1 = res;
    Array = Array1;
    for (var i = 0; i < Array1.length; i++)
    {
      if(Array1[i].state==true)
      {
        $('.ul').append('<li class="NonStriked" onClick="Striker(this)" data-id=' + Array1[i].id + '><input type="checkbox">'+ ' ' + Array1[i].text +'</li>');
      }
      else
      {
        $('.ul').append('<li class="Striked" onClick="Striker(this)" data-id=' + Array1[i].id + ' style="text-decoration: line-through"><input type="checkbox" checked>'+ ' ' + Array1[i].text +'</li>');
      }
    }
  });
}
