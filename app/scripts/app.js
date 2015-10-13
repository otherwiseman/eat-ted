'use strict';

/**
 * @ngdoc overview
 * @name eatTedApp
 * @description
 * # eatTedApp
 *
 * Main module of the application.
 */

google.load("feeds", "1");
angular
  .module('eatTedApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial'
  ])
  .config(function ($routeProvider, $mdThemingProvider) {
    $mdThemingProvider
      .theme('default')
      .primaryPalette('grey');
    $routeProvider
      .when('/', {
        templateUrl: 'views/feed_list.html'
      })
      .when('/detail', {templateUrl: "views/detail_view.html", controller: 'DetailCtrl'})
      .otherwise({
        redirectTo: '/'
      })
  });

