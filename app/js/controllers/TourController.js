'use strict';

aliwongApp.controller('TourController', function TourController($scope, tourData) {
  $scope.test = 'tour controller worked!';
  $scope.tours = tourData.getAllTours();
  // $scope.tours = $scope.toursArray[0];
})