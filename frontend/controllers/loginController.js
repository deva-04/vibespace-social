app.controller('LoginController', function($scope, $http, $location) { 
  $scope.user = {};

  $scope.login = function() {
    $http.post('http://localhost:5000/api/auth/login', {
      identifier: $scope.user.email,
      password: $scope.user.password
    })
    .then(function(res) {
      localStorage.setItem('token', res.data.token);
      alert("Login successful!");
      console.log("Redirecting to /posts");
      
      $location.path('/posts');
    })
    .catch(function(err) {
      alert(err.data.message || 'Login failed');
    });
  };
});
