angular.module('cityApp')
  .controller('DealsIndexController', DealsIndexController)
  .controller('DealsNewController', DealsNewController)
  .controller('DealsShowController', DealsShowController)
  .controller('DealsEditController', DealsEditController);

DealsIndexController.$inject = ['Deal'];
function DealsIndexController(Deal){
  const dealsIndex = this;

  dealsIndex.all = Deal.query();
}

DealsNewController.$inject = ['Deal', '$state'];
function DealsNewController(Deal, $state) {
  const dealsNew = this;
  dealsNew.deal = {};

  function createDeal() {
    Deal.save(dealsNew.deal, () => {
      $state.go('dealsIndex');
    });
  }

  dealsNew.create = createDeal;
}

DealsShowController.$inject = ['Deal', '$state'];
function DealsShowController(Deal, $state) {
  const dealsShow = this;

  dealsShow.deal = Deal.get($state.params);

  function deleteDeal() {
    dealsShow.deal.$remove(() => {
      $state.go('dealsIndex');
    });
  }

  dealsShow.delete = deleteDeal;
}

DealsEditController.$inject = ['Deal', '$state'];
function DealsEditController(Deal, $state) {
  const dealsEdit = this;

  dealsEdit.deal = Deal.get($state.params);

  function update() {
    Deal.update({ id: dealsEdit.deal._id}, dealsEdit.deal, () => {
      $state.go('dealsShow', $state.params);
    });
  }

  dealsEdit.update = update;
}
