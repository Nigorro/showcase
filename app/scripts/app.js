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
        controller: 'dataOutCtrl'
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
  });
