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
  .controller('CharacterSheetCtrl', function($scope, $location){ 

    $scope.CharacterInformation = {
      traits: {
        name: 'BeboSangre',
        player: 'Stephen Young',
        class: 'Fighter',
        race: 'Human'
      },
      abilities: {
        strength: {
          score: 234
        },
        dexterity: {
          score: 234
        }
      }
    };

    console.log($scope.CharacterInformation);

  });
