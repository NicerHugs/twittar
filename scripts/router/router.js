import SignupView from './../views/signup';
import LoginView from './../views/login';

export default Backbone.Router.extend({
  routes: {
    '': 'home',
    'signup': 'signup',
    'login': 'login',
    'tweets': 'tweets'
  },
  home: function() {
    console.log('fiddle bits');

  },
  signup: function() {
    var signupView = new SignupView();
    signupView.render();
    $('.container').html(signupView.el);
  },
  login: function() {
    var loginView = new LoginView();
    loginView.render();
    $('.container').html(loginView.el);
  }
});
