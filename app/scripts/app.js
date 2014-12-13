'use strict';

/**
 * @ngdoc overview
 * @name showcasesApp
 * @description
 * # showcasesApp
 *
 * Main module of the application.
 */
angular
  .module('showcasesApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'xeditable'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/dataout.html',
        controller: 'dataOutCtrl',
        resolve: {
          data: function($http, $q) {
            // var test = $q.defer();

            // setTimeout(function () { 
            //   test.reject({data: [1,2,3,4] });
            // }, 4000);
            
            // return test.promise;
            return $http.get('http://54.172.123.179:2403/box');
          }
        }
      })
      .when('/new',{
        templateUrl: 'views/new.html',
        controller: 'newDataCtrl'
      })
      .when('/edit',{
        templateUrl: 'views/edit.html',
        controller: 'editDataCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function ($rootScope) {
    $rootScope.isError = false;

    $rootScope.$on('$routeChangeError', function () {
      $rootScope.isError = true;
    })
  });
