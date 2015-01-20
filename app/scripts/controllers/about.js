'use strict';

/**
 * @ngdoc function
 * @name jafarApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jafarApp
 */
angular.module('jafarApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
