export default Backbone.Model.extend({
  defaults: {
    grant_type: 'password',
  },
  url: 'https://twittertiy.herokuapp.com/oauth/token'
});
