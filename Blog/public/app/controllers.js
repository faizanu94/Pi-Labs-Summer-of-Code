angular.module('BlogApp.controllers', []).
controller('SigninController', function($scope,ergastAPIservice,$location)
{
	$scope.username = "";
	$scope.password = "";
	ergastAPIservice.getUsername().success(function(response)
    {
    	$scope.username = response;
    	if($scope.username != "")
    		$location.path("/home");
    });
	$scope.get = function()
	{
    	ergastAPIservice.getUser($scope.username,$scope.password).success(function(response)
    	{
    		$location.path("/home");
    	});
	}
}).controller('SignupController', function($scope,ergastAPIservice,$location)
{
	$scope.username = "";
	$scope.email = "";
	$scope.password = "";
	ergastAPIservice.getUsername().success(function(response)
    {
    	$scope.username = response;
    	if($scope.username != "")
    		$location.path("/home");
    });
	$scope.post = function()
	{
    	ergastAPIservice.postUser($scope.username,$scope.email,$scope.password).success(function(response)
    	{
    		$location.path("/signin");
    	});
	}
}).controller('HomeController', function($scope,ergastAPIservice,$location)
{
	$scope.heading = "";
	$scope.title = "";
	$scope.post = "";
	$scope.username = "";
	$scope.blogs = [];
	ergastAPIservice.getBlogs().success(function(response)
    {
    	$scope.blogs = response;
    	for (var i in response)
    	{
    		$scope.blogs[i].timestamp = new Date($scope.blogs[i].timestamp).toGMTString();
    	}
    });
	ergastAPIservice.getUsername().success(function(response)
    {
    	$scope.username = response;
    	if($scope.username =="")
    		$location.path("/signin");
    });
	$scope.logout = function()
	{
    	ergastAPIservice.logout().success(function(response)
    	{
    		$location.path("/signin");
    	});
	}
	$scope.postBlog = function()
	{
    	ergastAPIservice.postBlog($scope.heading,$scope.title,$scope.post).success(function(response)
    	{
    		$location.path("/home");
    	});
	}
}).controller('BlogController', function($scope,ergastAPIservice,$location)
{
	$scope.username = "";
	ergastAPIservice.getUsername().success(function(response)
    {
    	$scope.username = response;
    	if($scope.username != "")
    		$location.path("/home");
    });
	ergastAPIservice.getGlobal().success(function(response)
    {
    	$scope.blogs = response;
    	for (var i in response)
    	{
    		$scope.blogs[i].timestamp = new Date($scope.blogs[i].timestamp).toGMTString();
    	}
    });
});