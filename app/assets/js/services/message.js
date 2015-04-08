angular.module('Trotter').factory('Message', function($resource) {
  return $resource('/messages/:id', {id: "@id"}, {
    update: {
      method: "PUT"
    }
  });
});
