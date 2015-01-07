angular.module('tempoApp').controller('interfaceCtrl', ['$scope', '$http', 'interfaceData',
	function($scope, $http, interfaceData) {

	/*  userData withholds all the data from interfaceData  */
	$scope.userData = interfaceData.getData();

	/*  selectedData is the portion of the data currently beeing viewed  */
	$scope.model = $scope.selectedData;

	/*  Watches changes for selected data and updates  */
	$scope.$on('dataSelected', function(event, args){
		$scope.model = $scope.selectedData;
	});

	/*  Toggles sidebar for item details */
	/************************************************************************/
	/*****  Use ng-click="toggleRightSidebar()" to toggle right sideBar *****/
	/************************************************************************/
	$scope.rightSidebarOpen = false;
	$scope.toggleRightSidebar = function toggleRightSidebar () {
		$scope.rightSidebarOpen = $scope.rightSidebarOpen === true ? false : true;
	};

	$scope.leftSidebarExpanded = false;
	$scope.toggleLeftSidebar = function toggleLeftSidebar () {
		$scope.leftSidebarExpanded = $scope.leftSidebarExpanded === true ? false : true;
	};

	/*  Add data manipulation and joy  */

}])
