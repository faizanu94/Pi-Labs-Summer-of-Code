angular.module('BlogApp.services', []).factory('ergastAPIservice', function($http)
{
  var ergastAPI = {};
  ergastAPI.getUser = function(a,b)
  {
    return $http.post('/login', {username:a,password:b});
  }
  ergastAPI.postUser = function(a,b,c)
  {
    return $http.post('/register', {username:a,email:b,password:c});
  }
  ergastAPI.postBlog = function(a,b,c)
  {
    return $http.post('/postblog', {heading:a,title:b,post:c});
  }
  ergastAPI.getBlogs = function()
  {
    return $http.get('/getblog', {});
  }
  ergastAPI.getGlobal = function()
  {
    return $http.get('/getglobal', {});
  }
  ergastAPI.getUsername = function()
  {
    return $http.get('/getuser', {});
  }
  ergastAPI.logout = function()
  {
    return $http.get('/logout', {});
  }
  return ergastAPI;
});