import Router from './router/router';

$('document').ready(function() {
  new Router();
  Backbone.history.start();
});
