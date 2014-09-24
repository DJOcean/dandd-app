'use strict';

angular.module('services.getCharacter', ['ngResource'])
.factory('GetCharacterService', function($firebase, fbURL) {
  return function(id) { return $firebase(new Firebase(fbURL + id))};
});