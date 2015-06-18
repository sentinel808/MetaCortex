var trackerController = angular.module('trackerController', []);

trackerController.controller('TrackerCtrl', ['$scope', '$http',
  function($scope, $http) {
    $scope.data = {};
    $scope.sortType = 'date';
    $scope.sortReverse = false;
    
    $http.get('./app/tracker/lootData.json').
      success(function(data, status, headers, config) {
        $scope.data = data;
      }).
      error(function(data, status, headers, config) {
        
      });
      
    $scope.chooseSort = function(type) {
      if ($scope.sortType === type) {
        $scope.sortReverse = !$scope.sortReverse;
      } else {
        $scope.sortType = type;
        $scope.sortReverse = false;
      }
    };

  }]);