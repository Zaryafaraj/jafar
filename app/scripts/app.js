'use strict';

/**
 * @ngdoc overview
 * @name jafarApp
 * @description
 * # jafarApp
 *
 * Main module of the application.
 */
angular.module('jafarApp.services', ['ngResource', 'ngRoute']);

angular
  .module('jafarApp', [
    'jafarApp.services',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'wu.masonry'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'AllTopicCtrl'
      })
      .when('/categories/:topicId', {
        templateUrl: 'views/topic.html',
        controller: 'TopicCtrl',
        resolve: {
          topicNews : ['TopicLoader', function(TopicLoader) {
            return new TopicLoader();
          }]
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  });
