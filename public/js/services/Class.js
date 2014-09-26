'use strict';

angular.module('services.class', ['ngResource'])
.factory('ClassService', function($firebase, fbURL) {
  return function() { 
  	return $firebase(new Firebase(fbURL + '/classes'))
  };
});

