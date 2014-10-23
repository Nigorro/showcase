'use strict';
angular.module('showcasesApp')
  .controller('dataOutCtrl', function ($scope, $http) {
    $scope.dpd = 'http://54.172.123.179:2403/box';
    $scope.show = false;
    $scope.getData = function () {
      var self = {};
      $http.get($scope.dpd)
        .success(function (item) {
          self.out = (item || 'an error occurred');
        });
      return self;
    };
    $scope.data = $scope.getData();
  });
