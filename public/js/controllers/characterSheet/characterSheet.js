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
      $scope.CharacterInformation = {};

      $scope.getCharacter = function() {
        CharacterService(0).$asObject().$loaded().then(function() {
          console.log("loaded record", obj.$id, obj.someOtherKeyInData);
        });
      };

      $scope.setBaseAttackBonus = function(obj) {
        console.log(obj);
        $scope.classInfo = ClassService('barbarian', 1);
      };

      $scope.getCharacter();
  });
