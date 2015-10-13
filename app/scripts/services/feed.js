'use strict';

/**
 * @ngdoc service
 * @name eatTedApp.Feed
 * @description
 * # Feed
 * Factory in the eatTedApp.
 */
google.load("feeds", "1");
angular.module('eatTedApp')
  .service('Feed', function ($q, $rootScope) {
    this.get = function(url) {
      var d = $q.defer();
      var feed = new google.feeds.Feed(url);
      feed.setNumEntries(10);
      feed.load(function(result) {
        $rootScope.$apply(d.resolve(result));
      });
      return d.promise;
    }
  });
