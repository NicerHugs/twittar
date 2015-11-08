import Router from './router/router';

$('document').ready(function() {
  window.twittarRouter = new Router();
  Backbone.history.start();
});
