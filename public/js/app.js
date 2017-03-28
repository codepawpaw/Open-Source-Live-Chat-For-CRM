'use strict';

angular.module('app', [
  'ngRoute',
  'app.controllers',
  'app.filters',
  'app.services',
  'app.directives',
  'ngMaterial',
  'ngMessages',
  'btford.socket-io'
]).
config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/view1', {
      templateUrl: 'partials/partial1.html',
      controller: 'controller1'
    }).
    when('/view2', {
      templateUrl: 'partials/partial2.html',
      controller: 'controller2'
    }).
    otherwise({
      redirectTo: '/view1'
    });

  $locationProvider.html5Mode(true);
});
