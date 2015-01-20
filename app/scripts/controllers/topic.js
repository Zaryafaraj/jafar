/**
 *
 * Created by Fathalian on 1/20/15.
 */
'use strict';


angular.module('jafarApp')
  .controller('TopicCtrl', ['$scope', '$routeParams', 'topicNews',
    function ($scope, $routeParams, topicNews) {

      $scope.topicId = $routeParams.topicId;
      $scope.topicTitle = $scope.topicId.charAt(0).toUpperCase() + $scope.topicId.slice(1);
      $scope.topicNews = topicNews.items;

  }]);
