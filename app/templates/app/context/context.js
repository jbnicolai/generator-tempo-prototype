angular.module('app').controller('contextCtrl', ['$scope', '$http', 'contextData', 
	function($scope, $http, contextData) {

	$scope.config = {
		"title":"Prototype Title",
		"env":"Teams"
	}

	console.log("context js");
	$scope.teams = contextData.getTeams().teams;

}])
