'use strict';


angular.module('BlogApp', ['BlogApp.controllers','BlogApp.services','ngRoute']).config(['$routeProvider', function($routeProvider)
{
	$routeProvider.when("/signin", {templateUrl: "partials/signin.html", controller: "SigninController"}).when("/signup", {templateUrl: "partials/signup.html", controller: "SignupController"}).when("/home", {templateUrl: "partials/home.html", controller: "HomeController"}).when("/blog", {templateUrl: "partials/blog.html", controller: "BlogController"}).when("/logout", {templateUrl: "partials/signin.html", controller: "HomeController"}).otherwise({redirectTo: '/blog'});
}]);