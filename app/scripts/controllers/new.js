'use strict';
angular.module('showcasesApp')
  .controller('newDataCtrl', function ($scope, $http) {
    $scope.dpd = 'http://54.172.123.179:2403/box';
    $scope.text='New text';
    $scope.getData = function () {
      var self = {};
      $http.get($scope.dpd)
        .success(function (item) {
          self.out = (item || 'an error occurred');
        });
      return self;
    };
    $scope.toArray = function(string) {
      $scope.nest = string.split('\n');
      $scope.result = [];
      $scope.tmp = {};
      for (var i = 0; i < $scope.nest.length; i++) {
          var items = $scope.nest[i].split('*');
          $scope.tmp.url = items[0];
          $scope.tmp.description = items[1];
          $scope.result.push($scope.tmp);
      }
      return $scope.result;
    };
    $scope.addProject = function () {
      console.log($scope.toArray($scope.Nested));
      $scope.Data = {
        date : new Date(),
        siteTitle : $scope.Title, 
        siteUrl : $scope.Url,
        nestedPage : $scope.toArray($scope.Nested), 
        siteDescription : $scope.Description
      };
      $scope.sendProject($scope.Data);
//http://localhost:9000/#/new * новая запись
//http://localhost:9000/*главная страница
    };
    $scope.sendProject = function (item) {
      $http.post($scope.dpd, item)
        .success(function () {
        });
    };
  });
