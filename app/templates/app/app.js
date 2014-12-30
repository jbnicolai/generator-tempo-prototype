var protoApp = angular.module('app', ['ngRoute'])

.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl:'prototype.html'
    })
    .otherwise({
      redirectTo:'/'
    });
})
