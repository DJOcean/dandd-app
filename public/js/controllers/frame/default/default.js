'use strict';

angular.module('personal.default', [
  'personal.home'
])

  .config(function($stateProvider, $urlRouterProvider, $locationProvider){
    $stateProvider
      .state('default',{
        abstract: true,
        templateUrl: 'templates/frame/default.html',
        controller: 'defaultCtrl'
      });

    $urlRouterProvider.when('', '/');
    $locationProvider.html5Mode(true);

  })
  .controller('defaultCtrl', function($scope, $location){ 


  });