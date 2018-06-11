app.factory('suggestions', [function() {
  var demoSuggestions = {
    posts: [
      {
        title: 'Free cheeseburgers at club meetings',
        upvotes: 15,
        comments: [],
      },
      {
        title: 'End all club meetings with ritual sacrifice',
        upvotes: 9,
        comments: [],
      },
      {
        title: 'Retrofit water fountain with Mountain Dew',
        upvotes: 7,
        comments: [],
      },
      {
        title: 'Sing Thin Lizzy\'s "Boys are Back In Town" at team SCRUMs',
        upvotes: 3,
        comments: [],
      },
    ],
  };
  return demoSuggestions;
}]);
