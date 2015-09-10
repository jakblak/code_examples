(function() {
  'use strict';

  angular
    .module('app')
    .controller('MainCtrl', MainCtrl);

  MainCtrl.$inject = ['$scope', '$timeout', 'Upload'];

  function MainCtrl($scope, $timeout, Upload) {

    // Create new Article
    $scope.uploadPic = function(file) {

      file.upload = Upload.upload({
        url: 'api/upload',
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        fields: {
          title: $scope.title,
          content: $scope.content
        },
        file: file
      });

      file.upload.then(function(response) {
        $timeout(function() {
          file.result = response.data;
        });
      }, function(response) {
        if (response.status > 0)
          $scope.errorMsg = response.status + ': ' + response.data;
      });

      file.upload.progress(function(evt) {
        // Math.min is to fix IE which reports 200% sometimes
        file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
      });
    };

  }
})();