var app = angular.module('socialApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/login', {
      templateUrl: 'views/login.html',
      controller: 'LoginController'
    })
    .when('/register', {
      templateUrl: 'views/register.html',
      controller: 'RegisterController'
    })
    .when('/posts', {
      templateUrl: 'views/post.html',
      controller: 'PostController'
    })
    .otherwise({
      redirectTo: '/login'
    });
});


app.run(function($rootScope, $location) {
  $rootScope.isLoggedIn = function() {
    return !!localStorage.getItem('token');
  };

  $rootScope.logout = function() {
    localStorage.removeItem('token');
    $location.path('/login');
  };
});
