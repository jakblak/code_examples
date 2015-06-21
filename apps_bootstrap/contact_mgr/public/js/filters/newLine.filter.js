(function() {
  'use strict';

  angular
    .module('app')
    .filter('paragraph', paragraph);

  paragraph.$inject = [];

  function paragraph() {
    return function(input) {
      return input.replace(/\n/g, '<br />');
    };
  }
})();