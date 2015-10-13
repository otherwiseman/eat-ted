'use strict';

/**
 * @ngdoc filter
 * @name eatTedApp.filter:trusted
 * @function
 * @description
 * # trusted
 * Filter in the eatTedApp.
 */

// http://stackoverflow.com/questions/20049261/sce-trustasresourceurl-globally

angular.module('eatTedApp')
  .filter('trusted', function ($sce) {
    return function(url) {
      return $sce.trustAsResourceUrl(url);
    };
  });

