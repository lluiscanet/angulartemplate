angular.module('Trotter').controller('MessagesShowController', function(Message, $scope, $routeParams, $location) {
  $scope.note = Message.get({id : $routeParams.id });

  $scope.deleteMessage = function(message) {
      message.$remove().then(function() {
        $location.path('/messages')
      });
  }
});
