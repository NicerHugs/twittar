import TweetView from './tweet';

export default Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.collection, 'change', this.render);
  },
  tagName: 'ul',
  className: 'tweets',
  template: _.template($('#tweets-template').html()),
  renderChildren: function() {
    var container = this.$el.children('ul.tweets');
    container.html('');
    this.collection.each(function(tweet) {
      var tweetView = new TweetView({
        model: tweet
      });
      container.prepend(tweetView.render().el);
    });
  },
  render: function() {
    this.$el.html(this.template());
    this.renderChildren();
    return this;
  },
  events: {
    'keypress #twit-input' : 'handleKeyPress'
  },
  handleKeyPress: function(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      this.collection.create({
        tweet: {
          body: $('#twit-input').val()
        }
      });
    }
  }
});
