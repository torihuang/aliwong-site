'use strict';

var aliwongApp = angular.module('aliwongApp', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl:'templates/Home.html',
      controller: 'HomeController'
    })
    $routeProvider.otherwise({redirectTo: '/'})
  })