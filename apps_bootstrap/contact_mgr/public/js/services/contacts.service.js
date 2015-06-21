(function() {
  'use strict';

  angular
    .module('app')
    .factory('contacts', contacts);

  contacts.$inject = [];

  function contacts() {
    var contacts = [{
      name: 'Stephen Radford',
      phone: '0123456789',
      address: '123, Some Street\nLeicester\nLE1 2AB',
      email: 'steve228uk@gmail.com',
      website: 'stephenradford.me',
      notes: ''
    }, {
      name: 'Declan Proud',
      phone: '91234859',
      address: '234, Some Street\nLeicester\nLE1 2AB',
      email: 'declan@declan.com',
      website: 'declanproud.me',
      notes: 'Some notes about the contact.'
    }, {
      name: 'Karan Bromwich',
      phone: '2345678',
      address: '234, Fake Ave\nBristol\nBS1 2AB',
      email: 'karan@comain.com',
      website: 'karan.com',
      notes: ''
    }];

    return {
      get: function() {
        return contacts;
      },
      find: function(index) {
        return contacts[index];
      },
      set: function(contact) {
        contacts.push(contact);
      },
      destroy: function(index) {
        contacts.splice(index, 1);
      }
    };
  }
})();