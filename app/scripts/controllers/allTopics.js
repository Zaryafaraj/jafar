/**
 * Created by zarya on 6/14/15.
 */

'use strict';

angular.module('jafarApp').controller('AllTopicCtrl',
    ['$scope', '$routeParams', 'allTopicNews', 'topicNews',
        function ($scope, $routeParams, allTopicNews, topicNews) {

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
            var images = {};
            allTopicNews.categories.query().$promise.then(function (result) {
                $scope.allTopicNews = result;
                $scope.topNews = {};
                _.each($scope.allTopicNews, function (topic) {
                    topicNews.topic.get({topicId: topic}).$promise.then(function (topicNews) {
                        var res = [];
                        _.each(topicNews.items, function (item) {
                            //if we haven't filled up the headlines and the item has an author that is not unknown and the item has a unique thumbnail
                            //save it to headlines
                            if (res.length < 5 && item.author && item.author !== 'unknown' && item.thumbnail && item.thumbnail.toLowerCase() !== 'none' && !images[item.thumbnail]) {
                                if(item.link.indexOf('coolhunting') === -1 && item.link.indexOf(".") !== -1){
                                    images[item.thumbnail] = true;
                                    res.push(item);
                                }

                            }
                        });
                        $scope.topNews[topic] = res;
                        console.log(topicNews.items);
                    });

                });

            });
        }]);
