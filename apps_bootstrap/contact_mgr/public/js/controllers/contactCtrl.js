(function() {
  'use strict';

  angular
    .module('app')
    .controller('contactCtrl', contactCtrl);

    contactCtrl.$inject = ['$scope', '$routeParams', 'contacts'];

    function contactCtrl($scope, $routeParams, contacts) {
      $scope.contact = contacts.find($routeParams.id);
    }
})();