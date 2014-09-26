'use strict';

angular.module('services.Character', ['ngResource'])
.factory('CharacterService', function($firebase, fbURL) {
  return $firebase(new Firebase(fbURL + '/characters'));
});