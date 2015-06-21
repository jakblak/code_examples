(function() {
  'use strict';

  angular
    .module('app')
    .controller('appCtrl', appCtrl);

  appCtrl.$inject = ['$scope', '$location'];

  function appCtrl($scope, $location) {
    $scope.startSearch = function() {
      $location.path('/');
    };

    $scope.pageClass = function(path) {
      return (path == $location.path()) ? 'active' : '';
    };
  }
})();