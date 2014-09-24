'use strict';

angular.module('services.class', ['ngResource'])
.factory('ClassService', function($firebase, fbURL) {
  return function(charClass, charLevel) { 
  	return $firebase(new Firebase(fbURL + 'classes/' + charClass + '/level/' + charLevel))
  };
});

