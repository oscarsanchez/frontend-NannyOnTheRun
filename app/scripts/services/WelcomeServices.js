angular.module('AngularScaffold.Services').factory('WelcomeService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		var baseUrl = 'http://localhost:8000/';
		return {

	    };
}]);
