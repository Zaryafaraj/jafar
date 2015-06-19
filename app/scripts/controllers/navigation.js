/**
 * Created by zarya on 6/14/15.
 */

'use strict';

angular.module( 'jafarApp' ).controller( 'NavigationCtrl',
  ['$scope', '$routeParams', 'allTopicNews', function( $scope, $routeParams, allTopicNews ) {

    $scope.allTopicNews = allTopicNews.categories.query();

  }] );