import User from './../models/user';

export default Backbone.View.extend({
  tagName: 'form',
  template: _.template($('#login-template').html()),
  render: function() {
    this.$el.html(this.template());
    return this;
  },
  events: {
    'click input[type="submit"]': 'login',
  },
  login: function(e) {
    e.preventDefault();
    this.model.set('password', document.getElementById('login-password').value);
    this.model.set('username', document.getElementById('login-email').value);
    this.model.save().then(function(response) {
      $.ajaxSetup({
        headers: {
          Authorization: 'Bearer ' + response.access_token
        }
      });
      window.twittarRouter.navigate('tweets', {trigger: true});
    });
  }
});
