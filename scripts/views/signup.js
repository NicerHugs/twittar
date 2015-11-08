import User from './../models/user';

export default Backbone.View.extend({
  tagName: 'form',
  template: _.template($('#signup-template').html()),
  render: function() {
    this.$el.html(this.template());
    return this;
  },
  events: {
    'click input[type="submit"]': 'signUp',
  },
  signUp: function(e) {
    e.preventDefault();
    this.model = new User({
      user: {
        email: $('#signup-email').val(),
        password: $('#signup-password').val()
      }
    });
    this.model.save().then(function() {
      window.twittarRouter.navigate('login', {trigger: true});
    });
  }
});
