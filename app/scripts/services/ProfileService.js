angular.module('AngularScaffold.Services').factory('ProfileService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		var baseUrl = 'http://backend-nannyontherun.herokuapp.com/';
		return {

	    };
}]);
