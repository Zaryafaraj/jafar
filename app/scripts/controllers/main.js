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
    $scope.topics = [

      {
        title : 'Tech',
        image: 'images/technology.png',
        link: '#/topics/tech'
      },
      {
        title : 'Design',
        image: 'images/design.png',
        link: '#/topics/design'
      },
      {
        title : 'Cinema',
        image: 'images/cinema.jpeg',
        link: '#/topics/cinema'
      },
      {
        title : 'Gaming',
        image: 'images/gaming.png',
        link: '#/topics/gaming'
      },
      {
        title : 'Science',
        image: 'images/science.jpg',
        link: '#/topics/science'
      },
      {
        title : 'Travel',
        image: 'images/travel.jpg',
        link: '#/topics/travel'
      },
      {
        title : 'Cars',
        image: 'images/cars.jpg',
        link: '#/topics/cars'
      },
      {
        title : 'Sports',
        image: 'images/sports.png',
        link: '#/topics/sports'
      },
      {
        title : 'Finance',
        image: 'images/finance.png',
        link: '#/topics/finance'
      },
      {
        title : 'Business',
        image: 'images/business.jpg',
        link: '#/topics/business'
      },
    ];
  });

