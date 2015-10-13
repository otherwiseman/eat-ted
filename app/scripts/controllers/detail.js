'use strict';

/**
 * @ngdoc function
 * @name eatTedApp.controller:DetailCtrl
 * @description
 * # DetailCtrl
 * Controller of the eatTedApp
 */
angular.module('eatTedApp')
  .controller('DetailCtrl', function ($scope, $location) {
    $scope.scrollClear($location.path());
    $scope.videoPlay = $scope.hasVideo($scope.currEntry);
  });
