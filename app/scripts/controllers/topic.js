/**
 *
 * Created by Fathalian on 1/20/15.
 */
'use strict';


angular.module('jafarApp')
  .controller('TopicCtrl', ['$scope', '$routeParams',
    function ($scope, $routeParams) {

      $scope.topicId = $routeParams.topicId;
      $scope.topicTitle = $scope.topicId.charAt(0).toUpperCase() + $scope.topicId.slice(1);

  }]);
