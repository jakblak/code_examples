(function() {
  'use strict';

  angular
    .module('app')
    .controller('addCtrl', addCtrl);

  addCtrl.$inject = ['$scope', '$alert', 'contacts'];

  function addCtrl($scope, $alert, contacts) {
    var alert = $alert({
      title: 'Success!',
      content: 'The contact was added successfully.',
      type: 'success',
      container: '#alertContainer',
      show: false
    });

    $scope.submit = function() {
      contacts.set($scope.contact);
      $scope.contact = null;
      alert.show();
    };
  }
})();