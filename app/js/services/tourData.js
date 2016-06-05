aliwongApp.factory('tourData', function($resource) {
  var tours = $resource('/data/tour/1.json');
  return {
    getAllTours: function() {
      console.log('Acquiring all tour data in /js/services/tourData.js');
      console.log(tours)
      return tours.query();
      console.log('Tour data acquired');
    }
  }
})