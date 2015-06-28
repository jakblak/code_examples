(function() {
  'use strict';

  angular
    .module('app')
    .factory('movieApi', movieApi);

  movieApi.$inject = ['$http', 'apiKeys', '$q'];

  function movieApi($http, $q, apiKeys) {

    var key = apiKeys.rt;

    return {
      boxOffice: boxOffice,
      upcomingMovies: upcomingMovies,
      openingSoon: openingSoon
    }

    function boxOffice() {
      return $http.get('http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json?apikey=' + 'key' + '&limit=20');
    }

    function upcomingMovies() {
      return $http.jsonp('http://api.rottentomatoes.com/api/public/v1.0/lists/movies/upcoming.json', {
        params: {
          apikey: '6b6y55b6u4zjz5zpyyd4tvpy',
          callback: 'JSON_CALLBACK'
        }
      })
    }

    function openingSoon() {
      return $http.get('http://api.rottentomatoes.com/api/public/v1.0/lists/movies/opening.jsonp?apikey=' + 'key' + '&limit=20');
    }
  }
})();