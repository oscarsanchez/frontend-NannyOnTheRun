angular.module('AngularScaffold.Services').factory('MainService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		var baseUrl = 'http://backend-nannyontherun.herokuapp.com/';
		return {

	    };
}]);
