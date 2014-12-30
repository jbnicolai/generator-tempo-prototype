angular.module('app').controller('interfaceCtrl', ['$scope', '$http', 'interfaceData', 
	function($scope, $http, interfaceData) {


	$scope.userData = interfaceData.getData();

	$scope.selectedData = $scope.userData[Object.keys($scope.userData)[0]];

	$scope.dataToggle = function dataToggle(dataSetName) {
		for(var key in $scope.userData) {
			if(key === dataSetName) {
				$scope.selectedData = $scope.userData[key];
			}
			
		}
	};

}])
