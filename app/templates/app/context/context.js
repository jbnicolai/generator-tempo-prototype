angular.module('tempoApp').controller('contextCtrl', ['$scope', '$http', 'contextData', 'interfaceData',
	function($scope, $http, contextData, interfaceData) {

	$scope.app = {
		"title":"<%= projectName %>",
		"shortTitle":"<%= projectName %>",
		"entity":"<%= entity %>",
		"number": 1,
		"showLeftSidebar":false,
		"rightSidebarTitle":"Item detail"
	}

	$scope.customData = interfaceData.getData();
	$scope.entity = contextData.getEntities()[$scope.app.entity][$scope.app.number];
	$scope.entity.pages.splice(2, 0, $scope.app.title);


	$scope.isCurrentPage = function isCurrentPage(pageName){
		if ($scope.app.title===pageName) {
			return true;
		} else {
			return false;
		}
	}

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
