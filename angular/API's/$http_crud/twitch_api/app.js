(function() {
  'use strict';

  angular
    .module('app', [])
    .controller('Ctrl1', Ctrl1);

    Ctrl1.$inject = ['$scope', '$http'];

    function Ctrl1($scope, $http) {

      getStreams();

      var streamers = ["freecodecamp", "GeoffStorbeck", "terakilobyte", "habathcx", "notmichaelmcdonald", "RobotCaleb", "medrybw", "comster404", "brunofin", "thomasballinger", "joe_at_underflow", "noobs2ninjas", "mdwasp", "beohoff", "xenocomagain"];

      function getStreams(){
        var api = "https://api.twitch.tv/kraken/streams/";
        var cb = "? callback=JSON_CALLBACK";
        streamers.forEach(function(stream) {
          $http.jsonp(api + stream + ch)
            .success(function(data) {
              $scope.streams = data;
            })
            .error(function(){
              console.log('failed to get data');
            });
        });
      }

    }
})();


(function() {
  'use strict';

  var app = angular.module('Twitch', []);

  app.controller('TwitchController', ['$http', function($http) {
    var streamers = ["Streamerhouse", "Monstercat",
      "medrybw"];
    var self = this; // i did this because otherwise this would refer to the $http in the $http service
    self.info = [];

    for (var i = 0; i < streamers.length; i++) {
     $http.jsonp("https://api.twitch.tv/kraken/streams/" + streamers[i]+ "? callback=JSON_CALLBACK").success(function(data) {
        self.info.push(data);
      })
    }
 }])
})();