var app = angular.module('photos', ['ngAnimate']);

app.controller('photoCtrl', function($scope, $http) {

  $scope.submit = function() {
    $scope.submitted = true;
    var input = $scope.photo.tag;
    var tag = input.replace(/\s+/g, '');
    console.log(tag);
    grabImages(tag);
  };

  function grabImages(tag) {
    var count = 20;
    var client_id = '<INSTAGRAM_ID>';
    var instagramUrl = 'https://api.instagram.com/v1/tags/' + tag + '/media/recent?client_id=' + client_id + '&callback=JSON_CALLBACK&count=' + count;

    console.log('searching for ' + tag);

    $http.jsonp(instagramUrl)
      .success(function(instagram_data) {
        console.log(instagram_data.data);
        if (instagram_data.meta.code == 200) {
          if (instagram_data.data.length > 0) {
            $scope.photos = instagram_data.data;
            $scope.message = "We found " + instagram_data.data.length + " results for " + tag;
          } else {
            $scope.message = "Sorry, no results.";
          }
        } else {
          $scope.message = "Sorry, something went wrong.";
        }
      }).error(function() {
        $scope.message = "Error. Try again.";
      });
  }

  $scope.reset = function() {
    $scope.submitted = false;
    $scope.photos = {};
    $scope.photo = {};
    $scope.message = null;
  };

});