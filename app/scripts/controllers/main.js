'use strict';

/**
 * @ngdoc function
 * @name jafarApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jafarApp
 */
angular.module('jafarApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
