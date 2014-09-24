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
      skills: [
        {
          name: 'alchemy',
          rank: 0
        },
        {
          name: 'animal empathy',
          rank: 0
        },
        {
          name: 'appraise',
          rank: 0
        },
        {
          name: 'balance',
          rank: 0
        },
        {
          name: 'bluff',
          rank: 0
        },
        {
          name: 'climb',
          rank: 0
        },
        {
          name: 'concentration',
          rank: 0
        },
        {
          name: 'craft',
          rank: 0
        },
        {
          name: 'decipher script',
          rank: 0
        },
        {
          name: 'diplomacy',
          rank: 0
        },
        {
          name: 'disable device',
          rank: 0
        },
        {
          name: 'disquise',
          rank: 0
        },
        {
          name: 'escape artist',
          rank: 0
        },
        {
          name: 'forgery',
          rank: 0
        },
        {
          name: 'gather information',
          rank: 0
        },
        {
          name: 'handle animal',
          rank: 0
        },
        {
          name: 'heal',
          rank: 0
        },
        {
          name: 'hide',
          rank: 0
        },
        {
          name: 'innuendo',
          rank: 0
        },
        {
          name: 'intuit direction',
          rank: 0
        },
        {
          name: 'jump',
          rank: 0
        },
        {
          name: 'knowledge arcana',
          rank: 0
        },
        {
          name: 'knowledge engineering',
          rank: 0
        },
        {
          name: 'knowledge geography',
          rank: 0
        },
        {
          name: 'knowledge history',
          rank: 0
        },
        {
          name: 'knowledge local',
          rank: 0
        },
        {
          name: 'knowledge nature',
          rank: 0
        },
        {
          name: 'knowledge nobility',
          rank: 0
        },
        {
          name: 'knowledge planes',
          rank: 0
        },
        {
          name: 'knowledge religion',
          rank: 0
        },
        {
          name: 'listen',
          rank: 0
        },
        {
          name: 'move silenty',
          rank: 0
        },
        {
          name: 'open lock',
          rank: 0
        },
        {
          name: 'perform',
          rank: 0
        },
        {
          name: 'pick pocket',
          rank: 0
        },
        {
          name: 'profession',
          rank: 0
        },
        {
          name: 'read lips',
          rank: 0
        },
        {
          name: 'ride',
          rank: 0
        },
        {
          name: 'scry',
          rank: 0
        },
        {
          name: 'search',
          rank: 0
        },
        {
          name: 'sense motive',
          rank: 0
        },
        {
          name: 'spellcraft',
          rank: 0
        },
        {
          name: 'spot',
          rank: 0
        },
        {
          name: 'swim',
          rank: 0
        },
        {
          name: 'tumble',
          rank: 0
        },
        {
          name: 'use magic device',
          rank: 0
        },
        {
          name: 'use rope',
          rank: 0
        },
        {
          name: 'wilderness lore',
          rank: 0
        }
      ],
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
