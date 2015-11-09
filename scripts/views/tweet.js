export default Backbone.View.extend({
  tagName: 'li',
  className: 'tweet',
  template: _.template($('#tweet-template').html()),
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});
