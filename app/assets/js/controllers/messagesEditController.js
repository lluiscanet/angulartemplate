angular.module('Trotter').controller('MessagesEditController', function(Message, $scope, $routeParams, $location) {
  $scope.message = Message.get({id : $routeParams.id });
  $scope.isSubmitting = false;

  $scope.updateMessage = function(message) {
    $scope.isSubmitting = true;
    message.$update().finally(function(){
      $scope.isSubmitting = false;
      $location.path('/messages/' + message.id)
    });

  };

});
