import SignupView from './../views/signup';
import LoginView from './../views/login';
import AuthRequest from './../models/AuthRequest';

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
    var loginView = new LoginView({
      model: new AuthRequest()
    });
    $('.container').html(loginView.render().el);
  }
});
