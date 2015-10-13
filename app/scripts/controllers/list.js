'use strict';

/**
 * @ngdoc function
 * @name eatTedApp.controller:ListCtrl
 * @description
 * # ListCtrl
 * Controller of the eatTedApp
 */
angular.module('eatTedApp')
  .controller('ListCtrl', function ($scope, $location) {
    $scope.layoutDone = function() {
      $scope.setLoading(false);
    };

    $scope.viewDetail = function(entry) {
      $scope.setCurrEntry(entry);
      $location.path('/detail');
    }
  });

