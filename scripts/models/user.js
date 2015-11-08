export default Backbone.Model.extend({
  url: 'https://twittertiy.herokuapp.com/users',
  initialize: function(opts) {
    if (opts && opts.user) {
      this.set('user', opts.user);
    }
  }
});
