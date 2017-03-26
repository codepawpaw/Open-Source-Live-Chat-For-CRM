'use strict';

// Declare app level module which depends on filters, and services

angular.module('app', [
  'ngRoute',

  'app.controllers',
  'app.filters',
  'app.services',
  'app.directives',
  'ngMaterial',
  'ngMessages',

  // 3rd party dependencies
  'btford.socket-io'
]).
config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/view1', {
      templateUrl: 'partials/partial1.html',
      controller: 'MyCtrl1'
    }).
    when('/view2', {
      templateUrl: 'partials/partial2.html',
      controller: 'MyCtrl2'
    }).
    otherwise({
      redirectTo: '/view1'
    });

  $locationProvider.html5Mode(true);
});
