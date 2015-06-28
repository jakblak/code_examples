(function() {
  'use strict';

  angular
    .module('app')
    .controller('mainCtrl', mainCtrl);

  mainCtrl.$inject = ['$scope', 'movieApi'];

  function mainCtrl($scope, movieApi) {

    $scope.loadMovies = function() {

      movieApi.upcomingMovies()
        .then(function(response) {
          var movieArray = response.data.movies;
          console.log(response);
          $scope.movies = movieArray;
        },
        function(response) {
          // error message
        });
    }
  }


})();