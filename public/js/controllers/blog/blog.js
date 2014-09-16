'use strict';

angular.module('personal.blog', [
  'ui.router'
])

  .config(function($stateProvider, $urlRouterProvider, $locationProvider){
    $stateProvider
      .state('default.blog',{
        url: '/',
        templateUrl: 'templates/blog/blog.html',
        controller: 'BlogCtrl'
      });

    $urlRouterProvider.when('', '/');
    $locationProvider.html5Mode(true);

  })
  .controller('BlogCtrl', function($scope, $location){ 


  });
