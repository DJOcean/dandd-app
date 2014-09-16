'use strict';

angular.module('personal.default', [
  'personal.home',
  'personal.contact',
  'personal.blog'
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
    $scope.sunsOut = true;
    var t = 0;

    // http://jsfiddle.net/W69s6/20/
    function moveSun(speed) {
        t += 0.05;
        var r = (window.innerWidth + $('#sunbox').width()/2)/2;
        var xcenter = (window.innerWidth)/2 - $('#sunbox').width()/2;
        var ycenter = (window.innerWidth)/2;
        var newLeft = Math.floor(xcenter + (r * Math.cos(t)));
        var newTop = Math.floor(ycenter + (r * Math.sin(t)));
        $('#sunbox').animate({
            top: newTop,
            left: newLeft,
        }, speed, function() {
          moveSun();
        });
    };


    function moveMoon(speed) {
        t += 0.05;
        var r = (window.innerWidth)/2 + $('#moonbox').width()/2;
        var xcenter = (window.innerWidth)/2 - $('#moonbox').width()/2;
        var ycenter = window.innerHeight;
        var newLeft = Math.floor(xcenter + (r * Math.cos(t)));
        var newTop = Math.floor(ycenter + (r * Math.sin(t)));
        $('#moonbox').animate({
            top: newTop,
            left: newLeft,
        }, speed, function() {
            moveMoon();
        });
    };

    $scope.switchTimeOfDay = function() {
      $scope.sunsOut = !$scope.sunsOut;
    };

    $(document).ready(function() {
      moveSun(100);
      moveMoon(100);
    });

  });