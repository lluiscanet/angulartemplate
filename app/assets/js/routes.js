angular.module('Trotter').config(function($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: '/app/assets/templates/dashboard.html'
      })
      .when('/messages', {
        templateUrl: '/app/assets/templates/messages/index.html',
        controller: 'MessagesIndexController'
      })
      .when('/messages/:id/edit', {
        templateUrl: '/app/assets/templates/messages/edit.html',
        controller: 'MessagesEditController'
      })
      .when('/messages/:id/new', {
        templateUrl: '/app/assets/templates/messages/create.html',
        controller: 'MessagesCreateController'
      })
      .when('/messages/:id', {
        templateUrl: '/app/assets/templates/messages/show.html',
        controller: 'MessagesShowController'
      })
      .otherwise({redirectTo: '/'});

});
