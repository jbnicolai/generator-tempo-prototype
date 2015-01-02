var tempoApp = angular.module('tempoApp', ['ngRoute'])

.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl:'interface.html',
    })
    .otherwise({
      redirectTo:'/'
    });
})
