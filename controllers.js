var FinalApp = angular.module('FinalApp')
	FinalApp.controller('MainController',function($scope,$resource,PostResource){
		
		
		$scope.posts = PostResource.query();

		$scope.removePost = function(post){
			PostResource.delete({idCountry: post.idCountry}, function(data){

				console.log(data);
			});

			$scope.posts = $scope.posts.filter(function(element){
				return  element.idCountry !== post.idCountry
			});
		}
	})


 FinalApp.controller('PostController', function($scope,PostResource,$routeParams) {
 	
 	$scope.post = PostResource.get({idCountry: $routeParams.idCountry});

 }); 


 FinalApp.controller('NewPostController', function($scope,PostResource) {
 	PostResource = $resource('http://localhost:9000/Country/:idCountry',{idCountry: "@idCountry"});
 	$scope.post = {};
 	$scope.savePost = function(){
 		PostResource.save({data: $scope.post}, function(data){
 			console.log(data);
 		});
 	}

 }); 





















 /*
var FinalApp = angular.module('FinalApp');

// Some APIs expect a PUT request in the format URL/object/ID
// Here we are creating an 'update' method
FinalApp.factory('Country', ['$resource', function($resource) {
return $resource('http://localhost:9000/Country/:idCountry', null,
    {
        'update': { method:'PUT' }
    });
}]);

// In our controller we get the ID from the URL using ngRoute and $routeParams
// We pass in $routeParams and our Country factory along with $scope
FinalApp.controller('CountryCtrl', ['$scope', '$routeParams', 'Country',
                                   function($scope, $routeParams, Country) {
// First get a note object from the factory
var post = Country.get({ id:$routeParams.id });
$id = post.idCountry;

// Now call update passing in the ID first then the object you are updating
Country.update({ id:$id }, post);

// This will PUT /posts/ID with the post object in the request payload
}]);
*/