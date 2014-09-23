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
        name: 'aquabeef',
        player: 'david young',
        class: 'fighter',
        race: 'human',
        level: 5,
        alignment: 'chaotic good',
        size: 'medium',
        age: 25,
        height: 60,
        weight: 150,
        deity: 'boccob',
        sex: 'male',
        eyes: 'brown',
        hair: 'brown',
        skin: 'tan'
      },
      abilities: {
        strength: {
          score: 99
        },
        dexterity: {
          score: 99
        },
        constitution: {
          score: 99
        },
        intelligence: {
          score: 99
        },
        wisdom: {
          score: 99
        },
        charisma: {
          score: 99
        }
      },
      stats: {
        experience: 999999
      },
      equipedWeapon: {
        name: 'shortsword',
        damage: 6,
        critical: ['19','20'], 
        criticalMultiplier: 2,
        weight: 3,
        range: 0,
        type: 'piercing',
        size: 'small'
      },
      skills: {
        alchemy: {
          rank: 0
        },
        animalEmpathy: {
          rank: 0
        }
      },
      gear: [
        {
          weapon: {
            name: 'shortsword',
            damage: 6,
            critical: ['19','20'], 
            criticalMultiplier: 2,
            weight: 3,
            range: 0,
            type: 'piercing',
            size: 'small'
          }
        },
        {
          weapon: {
            name: 'shortsword',
            damage: 6,
            critical: ['19','20'], 
            criticalMultiplier: 2,
            weight: 3,
            range: 0,
            type: 'piercing',
            size: 'small'
          }
        },
        {
          equipment: {
            name: 'rope',
            length: 48
          }
        }
      ],
      feats: [
        {
          name: 'improve initiative',
          desc: 'add to initiative'
        },
        {
          name: 'cleave',
          desc: 'hits two opponents'
        }
      ],
      spells: [
        {
          name: 'magic missle',
          desc: 'sends a magic missle'
        }
      ],
      languages: ['common'],
      money: {
        copper: 10,
        gold: 1,
        silver: 10,
        platinum: 4
      }
    };

    console.log($scope.CharacterInformation);

  });
