aliwongApp.factory('tourData', function($resource) {
  var tours = $resource('/data/tour/1.json');
  return {
    getAllTours: function() {
      return tours.query();
    }
  }
})