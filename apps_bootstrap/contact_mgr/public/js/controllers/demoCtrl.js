(function() {
  'use strict';

  angular
    .module('app')
    .controller('demoCtrl', demoCtrl);

  demoCtrl.$inject = ['$scope', '$alert'];

  function demoCtrl($scope, $alert) {
    $scope.modal = {
      title: 'Modal Title',
      content: 'Modal content'
    };

    /*-----------------------------------
    | Tooltip
    ------------------------------------*/

    $scope.tooltip = {
      title: 'Tooltip Title'
    };

    /*-----------------------------------
    | Popover
    ------------------------------------*/

    $scope.popover = {
      title: 'Title',
      content: 'Popover content'
    };

    /*-----------------------------------
    | Alert
    ------------------------------------*/

    $scope.alert = {
      title: 'Title',
      content: 'Alert content',
      type: 'success'
    };

    var alert = $alert({
      title: 'Alert Title!',
      content: 'Here\'s some content.',
      type: 'danger',
      container: '#alertContainer',
      show: false
    });

    $scope.showAlert = function() {
      alert.show();
    };
  }
})();