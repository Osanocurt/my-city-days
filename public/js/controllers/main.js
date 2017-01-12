angular.module('cityApp')
  .controller('MainController', MainController);

MainController.$inject = ['$auth', '$state', '$rootScope'];
function MainController($auth, $state, $rootScope) {
  const main = this;

  main.isLoggedIn = $auth.isAuthenticated;
  console.log('is auth?', main.isLoggedIn());

  function logout() {
    $auth.logout()
      .then(() => {
        $state.go('dealsIndex');
      });
  }

  main.logout = logout;

  main.message = null;
  const protectedStates = ['dealsEdit', 'dealsNew'];

  function secureState(e, toState) {
    main.message = null;
    if(!$auth.isAuthenticated() && protectedStates.includes(toState.name)) {
      e.preventDefault();
      $state.go('login');
      main.message = 'You must be logged in to go there!';
    }
  }

  $rootScope.$on('$stateChangeStart', secureState);
}
