angular
  .module('cityApp', ['ngResource', 'ui.router', 'satellizer'])
  .config(Router)
  .config(Auth);

Router.$inject = ['$stateProvider', '$urlRouterProvider'];
function Router($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('offersIndex', {
      url: '/offers',
      templateUrl: '/templates/offersIndex.html',
      controller: 'OffersIndexController as offersIndex'
    })
    .state('offersNew', {
      url: '/offers/new',
      templateUrl: '/templates/offersNew.html',
      controller: 'OffersNewController as offersNew'
    })
    .state('offersShow', {
      url: '/offers/:id',
      templateUrl: '/templates/offersShow.html',
      controller: 'OffersShowController as offersShow'
    })
    .state('offersEdit', {
      url: '/offers/:id/edit',
      templateUrl: '/templates/offersEdit.html',
      controller: 'OffersEditController as offersEdit'
    })
    .state('register', {
      url: '/register',
      templateUrl: '/templates/register.html',
      controller: 'RegisterController as register'
    })
    .state('login', {
      url: '/login',
      templateUrl: '/templates/login.html',
      controller: 'LoginController as login'
    });




  $urlRouterProvider.otherwise('/offers');
}

Auth.$inject = ['$authProvider'];
function Auth($authProvider) {
  $authProvider.loginUrl = '/login';
  $authProvider.signupUrl = '/register';

  $authProvider.tokenPrefix = '';
  $authProvider.facebook({
    clientId: '1512932325402819'
  });

  $authProvider.github({
    clientId: '7ca9786a512ecaaaa4b2'
  });
}
