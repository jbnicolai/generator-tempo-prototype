angular.module('myApp').controller('interfaceCtrl', ['$scope', '$http', 'interfaceData',
	function($scope, $http, interfaceData) {

	/*  userData withholds all the data from interfaceData  */
	$scope.userData = interfaceData.getData();

	/*  selectedData is the portion of the data currently beeing viewed  */
	$scope.selectedData = $scope.contextData;

	/*  Watches changes for selected data and updates  */
	$scope.$on('dataSelected', function(event, args){
		$scope.selectedData = $scope.contextData;
	});

	/*  Add data manipulation and joy  */

}])
