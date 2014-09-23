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
        },
        appraise: {
          rank: 0
        },
        balance: {
          rank: 0
        },
        bluff: {
          rank: 0
        },
        climb: {
          rank: 0
        },
        concentration: {
          rank: 0
        },
        craft: {
          rank: 0
        },
        decipherScript: {
          rank: 0
        },
        diplomacy: {
          rank: 0
        },
        disableDevice: {
          rank: 0
        },
        disguise: {
          rank: 0
        },
        escapeArtist: {
          rank: 0
        },
        forgery: {
          rank: 0
        },
        gatherInformation: {
          rank: 0
        },
        handleAnimal: {
          rank: 0
        },
        heal: {
          rank: 0
        },
        hide: {
          rank: 0
        },
        innuendo: {
          rank: 0
        },
        intimidate: {
          rank: 0
        },
        intuitDirection: {
          rank: 0
        },
        jump: {
          rank: 0
        },
        knowledgeArcana: {
          rank: 0
        },
        knowledgeEngineering: {
          rank: 0
        },
        knowledgeGeography: {
          rank: 0
        },
        knowledgeHistory: {
          rank: 0
        },
        knowledgeLocal: {
          rank: 0
        },
        knowledgeNature: {
          rank: 0
        },
        knowledgeNobility: {
          rank: 0
        },
        knowledgePlanes: {
          rank: 0
        },
        knowledgeReligion: {
          rank: 0
        },
        listen: {
          rank: 0
        },
        moveSilenty: {
          rank: 0
        },
        openLock: {
          rank: 0
        },
        perform: {
          rank: 0
        },
        pickPocket: {
          rank: 0
        },
        profession: {
          rank: 0
        },
        readLips: {
          rank: 0
        },
        ride: {
          rank: 0
        },
        scry: {
          rank: 0
        },
        search: {
          rank: 0
        },
        senseMotive: {
          rank: 0
        },
        spellcraft: {
          rank: 0
        },
        spot: {
          rank: 0
        },
        swim: {
          rank: 0
        },
        tumble: {
          rank: 0
        },
        useMagicDevice: {
          rank: 0
        },
        useRope: {
          rank: 0
        },
        wildernessLore: {
          rank: 0
        },
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
