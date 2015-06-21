var buildController = angular.module('builderController', []);

buildController.controller('BuilderCtrl', ['$scope', '$http', 
  function($scope, $http) {
    $scope.apikey = "pp3tqbc8eq95uexdbxwjpak97cmbetnm";
    $scope.locale = "en_US";
    $scope.responseData = {};
    
    $scope.entry = {
      "date": new Date(),
      "recipient": "",
      "item": {
        "name": "",
        "id": "",
        "difficulty": "heroic",
        "isWarforged": false,
        "hasExtraSocket": false,
        "hasAvoidance": false,
        "hasLeech": false,
        "hasSpeed": false,
        "isIndestructible": false,
        "bonuses": []
      }
    };
    
    $scope.getNameFromId = function(itemId) {
      config = {
        "params": {
          "locale": $scope.locale,
          "apikey": $scope.apikey,
          "callback": "JSON_CALLBACK",
        }
      };
      $http.get("https://us.api.battle.net/wow/item/" + itemId + "/raid-" + $scope.entry.item.difficulty, config).
        success(function(data, status, headers, config) {
          $scope.responseData = data;
          $scope.entry.item.name = data.name;
          $scope.entry.item.bonuses = [];
          if ($scope.entry.item.isWarforged) {
            $scope.entry.item.bonuses.push(562);
          }
          if ($scope.entry.item.hasExtraSocket) {
            $scope.entry.item.bonuses.push(565);
          }
          if ($scope.entry.item.hasAvoidance) {
            $scope.entry.item.bonuses.push(40);
          }
          if ($scope.entry.item.hasLeech) {
            $scope.entry.item.bonuses.push(41);
          }
          if ($scope.entry.item.hasSpeed) {
            $scope.entry.item.bonuses.push(42);
          }
          if ($scope.entry.item.isIndestructible) {
            $scope.entry.item.bonuses.push(43);
          }
        }).
        error(function(data, status, headers, config) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
        });
    };
    
    $scope.buildEntry = function() {
      $scope.getNameFromId($scope.entry.item.id);
    };
  }]);