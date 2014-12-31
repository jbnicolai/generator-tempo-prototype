angular.module('myApp').controller('contextCtrl', ['$scope', '$http', 'contextData', 'interfaceData',
	function($scope, $http, contextData, interfaceData) {

	$scope.config = {
		"title":"<%= projectName %>",
		"entity":"<%= entity %>"
	}

	$scope.customData = interfaceData.getData();
	$scope.teams = contextData.getTeams().teams;

	$scope.contextData = $scope.customData[Object.keys($scope.customData)[0]];

	$scope.$watch('contextData', function(){
		$scope.$broadcast('dataSelected');
	});

	$scope.dataToggle = function dataToggle(dataSetName) {
		for(var key in $scope.customData) {
			if(key === dataSetName) {
				$scope.contextData = $scope.customData[key];
			}
		}
	};

}])
