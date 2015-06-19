/**
 *
 * Created by Fathalian on 1/19/15.
 */
'use strict';

var app = angular.module('jafarApp.services');

app.service( 'allTopicNews', ['$resource', function( $resource ) {
  this.categories = $resource( 'http://localhost:8002/categories' );
}] );

app.service( 'topicNews', ['$resource', function( $resource ) {
  this.topic = $resource('http://localhost:8002/categories/:topicId');
}] );



app.factory('TopicLoader', ['topicNews', '$route', '$q',
  function(topicNews, $route, $q){

    //constructor function used in resolve
    return function() {
      var topicId = $route.current.params.topicId;
      var deferred = $q.defer();
      topicNews.topic.get({topicId: topicId},
        function( topic ) {
          deferred.resolve( topic );
        }, function() {
          deferred.reject( 'Unable to fetch topic news' );
        } );
      return deferred.promise;
    };

  }]);
