'use strict';

angular.module('personal.home', [
  'ui.router'
])

  .config(function($stateProvider, $urlRouterProvider, $locationProvider){
    $stateProvider
      .state('default.home',{
        url: '/',
        templateUrl: 'templates/home/home.html',
        controller: 'HomeCtrl'
      });

    $urlRouterProvider.when('', '/');
    $locationProvider.html5Mode(true);

  })
  .controller('HomeCtrl', function($scope, $location){ 

    $scope.curPage = 'home';

    $scope.imageCollection = {
      'vsnapMockup' : {
        'title' : 'Vsnap, Inc.',
        'subtitle' : 'Wireframe Mockup',
        'image' : '../assets/vsnap-mockup.png',
        'link' : 'vsnap'
      },
      'picaBrochure' : {
        'title' : 'Pica Manufacturing Solutions',
        'subtitle' : 'Brochure Design',
        'image' : '../assets/work/pica_brochure.jpg',
        'link' : 'pica'
      },
      'picaFolder' : {
        'title' : 'Pica Manufacturing Solutions',
        'subtitle' : 'Folder Design',
        'image' : '../assets/work/pica_folder.jpg',
        'link' : 'pica'
      },
      'picaBanner' : {
        'title' : 'Pica Manufacturing Solutions',
        'subtitle' : 'Pop-Up Banner Design',
        'image' : '../assets/work/pica_poster_01.jpg',
        'link' : 'pica'
      }
    }
    $scope.currentImageViewer = $scope.imageCollection.vsnapMockup;

    $scope.page = function(page){
      scrollTo(0,0);
      if(page==$scope.curPage) return true;
    };

    $scope.loadImage = function(image) {
      $scope.curPage = 'imageView';
      $scope.currentImageViewer = image;
    };

  });
