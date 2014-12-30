var app = angular.module('app', ['ngRoute'])

.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl:'interface.html'
    })
    .otherwise({
      redirectTo:'/'
    });
})
