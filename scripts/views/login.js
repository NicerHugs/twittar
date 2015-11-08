import User from './../models/user';

export default Backbone.View.extend({
  tagName: 'form',
  template: _.template($('#signup-template').html()),
  render: function() {
    this.$el.html(this.template());
    this.$el.children('input[type="submit"]').val('Login');
    return this;
  },
  events: {
    'click input[type="submit"]': 'login',
  },
  login: function(e) {
    e.preventDefault();
    this.model.save().then(function() {
      window.twittarRouter.navigate('login', {trigger: true});
    });
  }
});
