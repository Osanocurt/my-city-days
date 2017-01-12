angular.module('foodApp')
.controller('MainController', MainController);

MainController.$inject = ['moment', 'User', '$auth', '$state', '$rootScope', '$window'];
function MainController(moment, $auth, $state, $rootScope, $window) {
  const main = this;
  const Chart = $window.Chart;

  main.isLoggedIn = $auth.isAuthenticated;
  main.message = null;
  main.todaysCals = todaysCals;
  main.caloryCounter = 0;
  main.proteinCounter = 0;
  main.carbCounter = 0;
  main.fatCounter = 0;
  main.allMyFoods = [];
  main.today = moment().format('DD/MM/YYYY');

  main.thisUser = null;

  function logout() {
    $auth.logout();
    $state.go('landing');
  }

  main.logout = logout;

  function getUser() {
    const payload = $auth.getPayload();
    if(payload) {
      User.get({ id: $auth.getPayload()._id }, (user) => {
        main.thisUser = user;
        checkDailyGoal();
      });
    }
  }

  getUser();

  let days = [];

  function secureState(e, toState) {
    main.message = null;
    main.burgerOpen = false;
    if(!$auth.isAuthenticated() && toState.name !== 'landing') {
      e.preventDefault();
      $state.go('landing');
      main.message = 'You need to login to see that!';

    }
  }

  $rootScope.$on('$stateChangeStart', secureState);

  //function to populate a MONTHS worth of objects with dates and calories. they will update each day.





}
