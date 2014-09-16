'use strict';

angular.module('personal.contact', [
  'ui.router'
])

  .config(function($stateProvider, $urlRouterProvider, $locationProvider){
    $stateProvider
      .state('default.contact',{
        url: '/',
        templateUrl: 'templates/contact/contact.html',
        controller: 'ContactCtrl'
      });

    $urlRouterProvider.when('', '/');
    $locationProvider.html5Mode(true);

  })
  .controller('ContactCtrl', function($scope, $location){ 


  });
