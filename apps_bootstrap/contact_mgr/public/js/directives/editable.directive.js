(function() {
  'use strict';

  angular
    .module('app')
    .directive('editable', editable);

  editable.$inject = [];

  function editable() {
    return {
      restrict: 'AE',
      templateUrl: '/public/partials/editable.html',
      scope: {
        value: '=editable',
        field: '@fieldType'
      },
      controller: function($scope) {

        $scope.field = ($scope.field) ? $scope.field : 'text';

        $scope.editor = {
          showing: false,
          value: $scope.value
        };

        $scope.toggleEditor = function() {
          $scope.editor.showing = !$scope.editor.showing;
          $scope.editor.value = $scope.value;
        };

        $scope.save = function() {
          $scope.value = $scope.editor.value;
          $scope.toggleEditor();
        };
      }
    };
  }
})();