$(document).ready(function()
{
  $('#SaveButton').click(function()
  {
//    localStorage.Data=JSON.stringify(Array);
    $.ajax(
    {
      url: 'http://datastore.asadmemon.com/faizanu94', 
      type: 'POST', 
      contentType: 'application/json', 
      data: JSON.stringify(Array),
      success:function(res){console.log(res);}
    });
  });
});