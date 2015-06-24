(function() {
  'use strict';

  angular
    .module('app')
    .controller('movieCtrl', movieCtrl);

    movieCtrl.$inject = ['$scope', '$filter', '$routeParams', 'movieSrvc'];

    function movieCtrl($scope, $filter, $routeParams, movieSrvc) {

      $scope.movieId = $routeParams.id

      //$http.get('json/movies.json')
      movieSrvc.getMovies()
        .success(function(data) {
          $scope.movie = $filter('filter')(data, {
            id: parseInt($scope.movieId)
          }, true)[0];
        });
    }
})();