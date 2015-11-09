import Tweet from './../models/tweet';

export default Backbone.Collection.extend({
  url: 'https://twittertiy.herokuapp.com/tweets',
  model: Tweet
});
