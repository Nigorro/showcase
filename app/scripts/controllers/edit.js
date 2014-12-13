'use strict';
angular.module('showcasesApp')
  .controller('editDataCtrl', function ($scope, $http) {
    $scope.dpd = 'http://54.172.123.179:2403/box';
    $scope.show = false;
    $scope.allLoad = false;
    $scope.editData = function (item, id) {
      console.log(item+'   '+id);
      $http.put($scope.dpd+'/'+id, item)
        .error(function (err) {
          return console.log(err.message || (err.errors && err.errors.completed) || 'an error occurred');
        });
    };
    $scope.getData = function (str) {
      var self = {};
      $http.get(str)
        .success(function (item) {
          self.out = (item || 'an error occurred');
        });
      return self;
    };
    $scope.deleteData = function (str,id) {
      var self = {};
      var url = str+'/'+id;
      $http.delete(url)
        .success(function (item) {
          self.out = (item || 'an error occurred');
        });
      return self;
    };
    $scope.edit = function (item) {
      var id = item;
      // console.log($($event.target).data('id'));
      $scope.editData($scope.data.out);
      for (var i = 0; i < $scope.data.out.length; i++) {
          if ($scope.data.out[i].id === id) {
            $scope.editData($scope.data.out[i],id);

            // console.log($scope.data.out[i]);
          }
      }
    };

    $scope.delete = function (id) {
      $scope.deleteData($scope.dpd, id);
    };

    $scope.data = $scope.getData($scope.dpd);
  });
