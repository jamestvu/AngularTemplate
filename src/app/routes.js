(function() {
  'use strict';

  angular
      .module('template.Routes', [])
      .config(['$stateProvider', '$urlRouterProvider', Routes]);

  /** @ngInject */
  function Routes($stateProvider, $urlRouterProvider) {
      $stateProvider
            .state('page1', {
                url: '/page1',
                templateUrl: 'app/components/section1/page1.html',
                controller: 'page1Controller'
            })
            .state('page2', {
                url: '/page2',
                templateUrl: 'app/components/section2/page2.html',
                controller: 'page2Controller'
            })
            .state('splash', {
                url: '/splash',
                sticky: true,
                templateUrl: 'app/components/splash/splash.html'
            });

      $urlRouterProvider.otherwise('/splash');
      $urlRouterProvider.when('', '/splash');
  }

})();
