'use strict';

/**
 * @ngdoc function
 * @name eatTedApp.controller:FeedCtrl
 * @description
 * # FeedCtrl
 * Controller of the eatTedApp
 */

angular.module('eatTedApp')
  .controller('FeedCtrl', function ($scope, Feed, $timeout, $location) {

    $scope.feedList =['http://feeds.feedburner.com/tedtalks_video'];
    $scope.scrollPos = {}; // scroll position of each view

    $scope.scrollClear = function(path) {
      $scope.scrollPos[path] = 0;
    };

    $scope.setLoading = function(loading) {
      $scope.isLoading = loading;
    };


    $scope.loadFeed = function (url, addFeed) {
      $scope.setLoading(true);
      Feed.get(url).then(function (result) {
        if (result.error) {
          alert("ERROR " + result.error.code + ": " + result.error.message + "\nurl: " + url);
          $scope.setLoading(false);
        } else {
          if (addFeed) addFeed();
          var urlParser = document.createElement('a');
          urlParser.href = result.feed.link;
          result.feed.viewAt = urlParser.hostname;
          $scope.feed_result = result.feed;
          $scope.scrollClear('/');
          $location.path('/');
          if ($scope.feed_result.entries === 0) {
            $scope.setLoading(false);
          }
        }
      });
    };

    $scope.mediaUrl = function (entry) {
      return (entry && entry.mediaGroups) ? entry.mediaGroups[0].contents[0] : {
        url: ''
      };
    };

    $scope.hasVideo = function (entry) {
      var video = $scope.mediaUrl(entry);
      return video.type ? (video.type == "video/mp4") : (video.url ? (video.url.indexOf(".mp4") != -1) : false);
    };

    $scope.ifPathNot = function (path) {
      return $location.path() != path;
    };

    $scope.setCurrEntry = function (entry) {
      $scope.currEntry = entry;
    };

    $scope.loadFeed($scope.feedList[0]);
  });

