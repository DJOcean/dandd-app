'use strict';

angular.module('personal.default', [
  'personal.home'
])

  .config(function($stateProvider, $urlRouterProvider, $locationProvider){
    $stateProvider
      .state('default',{
        abstract: true,
        templateUrl: 'templates/frame/default.html',
        controller: 'defaultCtrl'
      });

    $urlRouterProvider.when('', '/');
    $locationProvider.html5Mode(true);

  })
  .controller('defaultCtrl', function($scope, $location){
    var newLeft = -200;
    var newBottom = -100;
    var returning = null;

    console.log(window.innerHeight);

    var t = 0;

    function moveit() {
        t += 0.05;
        var r = window.innerWidth/2;
        var xcenter = window.innerWidth/2;
        var ycenter = window.innerWidth/2;
        var newLeft = Math.floor(xcenter + (r * Math.cos(t)));
        var newTop = Math.floor(ycenter + (r * Math.sin(t)));
        $('#sunbox').animate({
            top: newTop,
            left: newLeft,
        }, 100, function() {
            moveit();
        });
    }

    $(document).ready(function() {
      moveit();
    });

  });