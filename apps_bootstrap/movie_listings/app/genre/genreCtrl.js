(function() {
  'use strict';

  angular
    .module('app')
    .controller('genreCtrl', genreCtrl);

  genreCtrl.$inject = ['$scope', '$routeParams', '$filter', 'movieSrvc'];

  function genreCtrl($scope, $routeParams, $filter, movieSrvc) {

    $scope.currentPage = 1;
    $scope.pageSize = 12;
    $scope.genreName = $routeParams.genreName;
    $scope.pageTitle = $scope.genreName + ' movies';

    movieSrvc.getMovies()
      .success(function(data) {
        $scope.movieList = $filter('filter')(data, function(movie) {
          return $filter('filter')(movie.genres, {
            name: $scope.genreName
          }).length;
        });
      });

    movieSrvc.getGenres()
      .success(function(data) {
        $scope.genreList = data;
      });
  }

})();