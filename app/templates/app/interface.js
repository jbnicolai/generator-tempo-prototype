angular.module('tempoApp').controller('interfaceCtrl', ['$scope', '$http', 'interfaceData',
	function($scope, $http, interfaceData) {

	/*  userData withholds all the data from interfaceData  */
	$scope.userData = interfaceData.getData();

	/*  selectedData is the portion of the data currently beeing viewed  */
	$scope.model = $scope.contextData;

	/*  Watches changes for selected data and updates  */
	$scope.$on('dataSelected', function(event, args){
		$scope.model = $scope.contextData;
	});

	/*  Add data manipulation and joy  */

}])
