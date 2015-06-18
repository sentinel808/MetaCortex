var app = angular.module('app', ['ngRoute', 'trackerController', 'homeController']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: './app/home/home.html',
        controller: 'HomeCtrl'
      }).
      when('/tracker', {
        templateUrl: './app/tracker/tracker.html',
        controller: 'TrackerCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);


app.controller('AppCtrl', ['$scope',
  function($scope) {

  }]);