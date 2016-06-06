'use strict';

aliwongApp.controller('TourController', function TourController($scope, tourData, $window, $anchorScroll, $location) {
  $scope.test = 'tour controller worked!';
  $scope.tours = tourData.getAllTours();
  $scope.tourIdShow = -1;

  $scope.assignTourId = function(tourId) {
    if (this.tourIdShow == tourId) {
      this.tourIdShow = -1;
    } else {
      this.tourIdShow = tourId;
    }
  };

  $scope.openTour = function(tourId) {
    if (this.tourIdShow == tourId) {
      console.log('here')
      return true;
    } else {
      return false;
    }
  };

  $scope.goToNetflix = function() {
    $window.open('https://www.netflix.com', '_blank');
  }

  $scope.gotoAnchor = function(x) {
    if ($location.hash() !== x) {
      // set the $location.hash to `newHash` and
      // $anchorScroll will automatically scroll to it
      $location.hash(x);
    } else {
      // call $anchorScroll() explicitly,
      // since $location.hash hasn't changed
      $anchorScroll();
    }
  };
  // $scope.tours = $scope.toursArray[0];
})