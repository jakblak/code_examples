(function() {
  'use strict';

  angular
    .module('app')
    .config(config);

  config.$inject = ['$routeProvider', '$locationProvider'];

  function config($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
      controller: 'indexCtrl',
      templateUrl: '/public/partials/index.html'
    })
    .when('/add-contact', {
      controller: 'addCtrl',
      templateUrl: '/public/partials/add.html'
    })
    .when('/contact/:id', {
      controller: 'contactCtrl',
      templateUrl: '/public/partials/contact.html'
    })
    .otherwise({
      redirectTo: '/'
    });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }
})();