angular
    .module('cityApp', ['ngResource', 'ui.router', 'satellizer'])
    .config(Router)
    .config(Auth);

Router.$inject = ['$stateProvider', '$urlRouterProvider'];
function Router($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('dealsIndex', {
      url: '/deals',
      templateUrl: '/templates/dealsIndex.html',
      controller: 'DealsIndexController as dealsIndex'
    })
    .state('dealsNew', {
      url: '/deals/new',
      templateUrl: '/templates/dealsNew.html',
      controller: 'DealsNewController as dealsNew'
    })
    .state('dealsShow', {
      url: '/deals/:id',
      templateUrl: '/templates/dealsShow.html',
      controller: 'DealsShowController as dealsShow'
    })
    .state('dealsEdit', {
      url: '/deals/:id/edit',
      templateUrl: '/templates/dealsEdit.html',
      controller: 'DealsEditController as dealsEdit'
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

  $urlRouterProvider.otherwise('/deals');
}

Auth.$inject = ['$authProvider'];
function Auth($authProvider) {
  $authProvider.loginUrl = '/login';
  $authProvider.signupUrl = '/register';

  $authProvider.tokenPrefix = '';
}
