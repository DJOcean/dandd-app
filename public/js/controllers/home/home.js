'use strict';

angular.module('personal.home', [
  'ui.router'
])

  .config(function($stateProvider, $urlRouterProvider, $locationProvider){
    $stateProvider
      .state('default.home',{
        url: '/',
        templateUrl: 'templates/home/home.html',
        controller: 'homeCtrl'
      });

    $urlRouterProvider.when('', '/');
    $locationProvider.html5Mode(true);

  })
  .controller('homeCtrl', function($scope, $location){ 


  });
