'use strict';

var aliwongApp = angular.module('aliwongApp', ['ngResource', 'ngRoute'])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
      templateUrl:'templates/Home.html',
      controller: 'HomeController'
    })
    $routeProvider.otherwise({redirectTo: '/'})
    $locationProvider.html5Mode(true);
  })