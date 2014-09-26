'use strict';

angular.module('dnd.classes', [
  'ui.router'
])

  .config(function($stateProvider, $urlRouterProvider, $locationProvider){
    $stateProvider
      .state('default.classes',{
        url: '/classes/:charClass',
        templateUrl: 'templates/classes/classes.html',
        controller: 'ClassesCtrl'
      });

    $urlRouterProvider.when('', '/');
    $locationProvider.html5Mode(true);

  })
  .controller('ClassesCtrl', function(
    $scope, ClassService, $stateParams){ 
    $scope.currentClass = $stateParams.charClass;
    console.log(ClassService());
    $scope.classCollection = ClassService();
  });
