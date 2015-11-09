import SignupView from './../views/signup';
import LoginView from './../views/login';
import TweetsView from './../views/tweets';
import TweetCollection from './../collections/tweets';
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
  },
  tweets: function() {
    var tweetsView = new TweetsView({
      collection: new TweetCollection()
    });
    tweetsView.collection.fetch({
      success: function() {
        $('.container').html(tweetsView.render().el);
      }
    });
  }
});
