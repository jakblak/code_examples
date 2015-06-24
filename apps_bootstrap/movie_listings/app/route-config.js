(function() {
  'use strict';

  angular
    .module('app')
    .config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'catalog/catalog.html',
          controller: 'catalogCtrl'
        })
        .when('/movie/:id', {
          templateUrl: 'movie/movie.html',
          controller: 'movieCtrl'
        })
        .when('/genre/:genreName', {
          templateUrl: 'catalog/catalog.html',
          controller: 'genreCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });
    }
})();