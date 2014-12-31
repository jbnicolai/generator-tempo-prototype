var myApp = angular.module('myApp', ['ngRoute'])

.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl:'interface.html',
    })
    .otherwise({
      redirectTo:'/'
    });
})
