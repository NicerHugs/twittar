export default Backbone.Router.extend({
  routes: {
    '': 'home',
    'signup': 'signup',
    'login': 'login'
    'tweets': 'tweets'
  },
  home: function() {
    console.log('fiddle bits');
    
  }
});
