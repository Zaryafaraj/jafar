/**
 *
 * Created by Fathalian on 1/19/15.
 */
'use strict';

var app = angular.module('jafarApp.services');

app.factory('Topic', ['$resource', function($resource) {
  return $resource('http://localhost:8000/categories/:topicId');
}]);

app.factory('TopicLoader', ['Topic', '$route', '$q',
  function(Apartment, $route, $q){

    //constructor function used in resolve
    return function() {
      var topicId = $route.current.params.topicId;
      var deferred = $q.defer();
      Apartment.get({topicId: topicId},
        function( topic ) {
          deferred.resolve( topic );
        }, function() {
          deferred.reject( 'Unable to fetch topic news' );
        } );
      return deferred.promise;
    };

  }]);