(function() {
  'use strict';

  angular
    .module('app')
    .filter('truncate', truncate);

    truncate.$inject = [];

    function truncate() {
      //if input is more then our limit remove and add ellipse, else return input
      return function(input, limit) {
        return (input.length > limit) ? input.substr(0, limit) + '...' : input;
      }
    }
})();