'use strict';

/**
 * @ngdoc function
 * @name showcasesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the showcasesApp
 */
angular.module('showcasesApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
