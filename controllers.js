var FinalApp = angular.module('FinalApp')
	FinalApp.controller('MainController',function($scope,$resource){
		
		Post = $resource('http://localhost:9000/Country/:idCountry',{id: "@idCountry"});
		$scope.posts = Post.query();
	})


 FinalApp.controller('PostController', function($scope,$resource,$routeParams) {
 	Post = $resource('http://localhost:9000/Country/:idCountry/?format=json',{id: "@idCountry"});
 	$scope.post = Post.get({id: $routeParams.idCountry});

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