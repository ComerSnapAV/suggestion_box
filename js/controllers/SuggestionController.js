app.controller('SuggestionController', ['$scope', '$routeParams', 'suggestions', function($scope, $routeParams, suggestions) {
  $scope.post = suggestions.posts[$routeParams.id];

  $scope.addComment = function() {

    // if input is empty, don't submit
    if (!$scope.comment || $scope.comment === '') {
      return;
    }

    // push new comment to suggestion post in suggestions.js
    $scope.post.comments.push({
      body: $scope.comment,
      upvotes: 0,
    });

    // after submission, clear form input
    $scope.comment = '';
  };

  $scope.upVote = function(comment) {
    comment.upvotes += 1;
  };

}]);
