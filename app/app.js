var app = angular.module('app', []);

app.controller('AppCtrl', ['$scope', '$http',
  function($scope, $http) {
    $scope.data = {key: "val"};
    
    $http.get('testData.json').
      success(function(data, status, headers, config) {
        $scope.data = data;
      }).
      error(function(data, status, headers, config) {
        
      });

  }]);