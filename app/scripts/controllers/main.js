'use strict';

/**
 * @ngdoc function
 * @name showcasesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the showcasesApp
 */
angular.module('showcasesApp')
  .controller('showCasesCtrl', function ($scope, background) {
  	$scope.background = background;

  });
