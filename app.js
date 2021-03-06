var FinalApp = angular.module('FinalApp', ['ngRoute','ngResource'])

FinalApp.config(function($routeProvider){

		$routeProvider
			.when('/', {
	            templateUrl : 'templates/home.html',
	            controller  : 'MainController'
	        })

	        .when('/post/:idCountry', {
	        	controller  : 'PostController',
	            templateUrl : 'templates/post.html'
	           
	        })

	        .when('/posts/new', {
	        	controller  : 'NewPostController',
	            templateUrl : 'templates/post_form.html'
	           
	        })
 
	});


