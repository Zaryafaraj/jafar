/**
 * Created by zarya on 6/14/15.
 */

'use strict';

angular.module( 'jafarApp' ).controller( 'AllTopicCtrl',
  ['$scope', '$routeParams', 'allTopicNews', 'topicNews',
   function( $scope, $routeParams, allTopicNews, topicNews ) {

     //var filterThumbnails = function() {
     //  var count = 0;
     //  var designItems = [];
     //  for ( var i = 0; i <= $scope.designTopic.items.length && count < 5; i++ ) {
     //    var designItem = designTopic.items[i];
     //    if ( designItem.thumbnail ) {
     //      count++;
     //      designItems.push( designItem );
     //    }
     //  }
     //  return designItems;
     //};

     $scope.allTopicNews = allTopicNews.categories.query();
     $scope.designTopic = topicNews.topic.get( {topicId: 'design'} );
     $scope.newsTopic = topicNews.topic.get( {topicId: 'news'} );
     //$scope.designTopic = topicNews.topic.get( {topicId: 'design'} ).$promise.then( function() {
     //  $scope.thumbnailItems = filterThumbnails()
     //} );
     //$scope.numLimit = 5;


   }] );
