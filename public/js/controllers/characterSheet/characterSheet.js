'use strict';

angular.module('dnd.characterSheet', [
  'ui.router'
])

  .config(function($stateProvider, $urlRouterProvider, $locationProvider){
    $stateProvider
      .state('default.characterSheet',{
        url: '/',
        templateUrl: 'templates/characterSheet/characterSheet.html',
        controller: 'CharacterSheetCtrl'
      });

    $urlRouterProvider.when('', '/');
    $locationProvider.html5Mode(true);

  })
  .controller('CharacterSheetCtrl', function(
    $scope, $location, CharacterService, ClassService){ 
      $scope.Math = window.Math;
      $scope.CharacterInformation = CharacterService.$child(0);
      console.log($scope.CharacterInformation);

      $scope.setBaseAttackBonus = function() {
        // needs to be dynamic
        $scope.classInfo = ClassService();
      };

      console.log(ClassService());
  });
