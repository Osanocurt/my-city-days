angular.module('cityApp')
  .controller('OffersIndexController', OffersIndexController)
  .controller('OffersNewController', OffersNewController)
  .controller('OffersShowController', OffersShowController)
  .controller('OffersEditController', OffersEditController);


OffersIndexController.$inject = ['Offer'];
function OffersIndexController(Offer) {
  const offersIndex = this;

  offersIndex.all = Offer.query();
}

OffersNewController.$inject = ['Offer', '$state'];
function OffersNewController(Offer, $state) {
  const offersNew = this;

  offersNew.boot = {};

  function create() {
    Offer.save(offersNew.boot, () => {
      $state.go('offersIndex');
    });
  }

  offersNew.create = create;
}

OffersShowController.$inject = ['Offer', '$state', '$auth'];
function OffersShowController(Offer, $state, $auth) {
  const offersShow = this;

  offersShow.boot = Offer.get($state.params);

  function deleteOffer() {
    offersShow.boot.$remove(() => {
      $state.go('offersIndex');
    });
  }

  offersShow.delete = deleteOffer;
  offersShow.isLoggedIn = $auth.isAuthenticated;
}

OffersEditController.$inject = ['Offer', '$state'];
function OffersEditController(Offer, $state) {
  const offersEdit = this;

  offersEdit.boot = Offer.get($state.params);

  function update() {
    offersEdit.boot.$update(() => {
      $state.go('offersShow', $state.params);
    });
  }

  this.update = update;

}
