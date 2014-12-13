'use strict';
angular.module('showcasesApp').service('background', function() {
	var min = 1;
	var max = 12;

	var index = Math.floor(Math.random() * (max - min) + min);

	  return {
	  	randomizeStyle: function () {
	  		return 'bg' + index;
	  	}
	  };
	});