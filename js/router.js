/*global define */

define(['jquery', 'backbone', 'domReady', 'appState'], function ($, Backbone, domReady, appState) {
  "use strict";

  var Router, self = this;

  Router = Backbone.Router.extend({
    routes: {
      'bus/:bus': 'selectBus',
      'bus/:bus/:dir': 'selectDirection',
      '*default': 'default'
    }
  });

  Router.initialize = function () {

    appState.init(function () {

      console.log('Storage settings: ', appState.getSettings());
      console.log('Storage buses: ', appState.getBuses());

      console.log('Before requiring APP');

      require(['application'], function (App) {
        console.log('App required');
        var app = new App();
        app.selectBus('b63');

        domReady(function () {
          require(['metrolyUi']);
        });

        Backbone.history.start({pushState: false});
      });
      console.log('After requiring APP');
    });
  };

  return Router;
});




