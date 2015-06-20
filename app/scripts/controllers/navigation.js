/**
 * Created by zarya on 6/14/15.
 */

'use strict';

angular.module( 'jafarApp' ).controller( 'NavigationCtrl',
  ['$scope', '$routeParams', 'allTopicNews', '$location',
   function( $scope, $routeParams, allTopicNews, $location ) {

     $scope.allTopicNews = allTopicNews.categories.query();

     var topicId = $location.path().replace(/\/\w+\//, '');

     //alert(topicId);
     if (topicId.length > 1) {
       $scope.activeTopic = topicId;
     } else {
       $scope.activeTopic = 'Home';
     }

     $scope.goHome = function() {
       $location.url('/');
       $scope.activeTopic = 'Home';
     };
     $scope.itemClicked = function(topicId) {
       $location.url('/topics/' + topicId);
       $scope.activeTopic = topicId;
     };

   }] );