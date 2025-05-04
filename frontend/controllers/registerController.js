app.controller('RegisterController', function($scope, $http, $location) {
  $scope.user = {};

  $scope.register = function() {
    $http.post('http://localhost:5000/api/auth/register', $scope.user)
      .then(function(res) {
        alert(res.data.message);
        $location.path('/login');
      })
      .catch(function(err) {
        alert(err.data.message || 'Registration failed');
      });
  };
});