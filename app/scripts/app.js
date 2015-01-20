'use strict';

/**
 * @ngdoc overview
 * @name jafarApp
 * @description
 * # jafarApp
 *
 * Main module of the application.
 */
angular
  .module('jafarApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/topics/:topicId', {
        templateUrl: 'views/topic.html',
        controller: 'TopicCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
