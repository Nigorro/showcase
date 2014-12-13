'use strict';
angular.module('showcasesApp')
  .controller('dataOutCtrl', function ($scope, data, $http) {
    $scope.data = data;

    $scope.isLoading = function () {
      return $http.pendingRequests > 0;
    };

    // $scope.dpd = 'http://54.172.123.179:2403/box';
    // $scope.show = false;
    // $scope.projTotal = 0;
    // $scope.pageTotal = 0;
    // function sleep(ms) {
    //   ms += new Date().getTime();
    //   while (new Date() < ms){}
    // }

    // $scope.getData = function () {
    //   var self = {},
    //     orderBy = $filter('orderBy');

    //   $http.get($scope.dpd)
    //     .success(function (item) {
    //       self.out = (orderBy(item, 'date', 1) || 'an error occurred');
    //     });
    //   return self;
    // };
    // // console.log($scope.data);
    // $scope.data = $scope.getData();
    // sleep(3000);
    // console.log($scope.data.out);
  });
