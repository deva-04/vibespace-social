app.controller('PostController', function($scope, $http) {
  $scope.newPost = {};
  $scope.posts = [];

  const token = localStorage.getItem('token');

  $scope.createPost = function() {
    $http.post('http://localhost:5000/api/posts', $scope.newPost, {
      headers: { Authorization: token }
    })
    .then(function(res) {
      $scope.posts.unshift(res.data);
      $scope.newPost = {};
    });
  };

  function loadPosts() {
    $http.get('http://localhost:5000/api/posts')
      .then(function(res) {
        $scope.posts = res.data;
        $scope.posts.forEach(p => p.newComment = "");
      });
  }

  $scope.likePost = function(post) {
    $http.post('http://localhost:5000/api/posts/' + post._id + '/like', {}, {
      headers: { Authorization: token }
    }).then(function(res) {
      post.likes = res.data.likes;
    });
  };

  $scope.commentPost = function(post) {
    $http.post('http://localhost:5000/api/posts/' + post._id + '/comment', {
      text: post.newComment
    }, {
      headers: { Authorization: token }
    }).then(function(res) {
      post.comments = res.data;
      post.newComment = "";
    });
  };

  loadPosts();
});