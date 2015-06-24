(function() {
  'use strict';

  angular
    .module('app')
    .factory('movieSrvc', movieSrvc);

  movieSrvc.$inject = ['$http'];

  function movieSrvc($http) {

    return {
      getMovies: getMovies,
      getGenres: getGenres
    }

    function getMovies() {
      return $http.get('json/movies.json');
    }

    function getGenres() {
      return $http.get('json/genres.json');
    }
  }
})();