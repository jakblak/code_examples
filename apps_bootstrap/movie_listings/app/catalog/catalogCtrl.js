(function() {
  'use strict';

  angular
    .module('app')
    .controller('catalogCtrl', catalogCtrl);

  catalogCtrl.$inject = ['$scope', 'movieSrvc'];

  function catalogCtrl($scope, movieSrvc) {

    $scope.currentPage = 1;
    $scope.pageSize = 12;
    $scope.pageTitle = 'Most Watched This Week';

    movieSrvc.getMovies()
      .success(function(data) {
        $scope.movieList = data;
      });

    movieSrvc.getGenres()
      .success(function(data) {
        $scope.genreList = data;
      });
  }

})();