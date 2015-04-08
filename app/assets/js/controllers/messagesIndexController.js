angular.module('Trotter').controller('MessagesIndexController', function(Message, $scope) {
  $scope.messages = Message.query();
});
