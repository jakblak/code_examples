(function() {
  'use strict';

  angular
    .module('app')
    .controller('indexCtrl', indexCtrl);

  indexCtrl.$inject = ['$scope', '$alert', 'contacts'];

  function indexCtrl($scope, $alert, contacts) {
    $scope.contacts = contacts.get();

    $scope.modal = {
      title: 'Hello'
    };

    var alert = $alert({
      title: 'Success!',
      content: 'The contact was deleted successfully.',
      type: 'success',
      container: '#alertContainer',
      show: false
    });

    $scope.delete = function(index) {
      contacts.destroy(index);
      alert.show();
    };
  }
})();