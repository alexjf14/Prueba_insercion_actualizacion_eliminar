var FinalApp = angular.module('FinalApp')

.factory('PostResource',function ($resource) {
	
	return $resource('http://localhost:9000/Country/:idCountry',{idCountry: "@idCountry"},{update:{method: "PUT"}});
})