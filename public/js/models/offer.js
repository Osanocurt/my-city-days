angular.module('cityApp')
  .factory('Offer', Offer);

Offer.$inject = ['$resource'];
function Offer($resource) {
  return new $resource('/offers/:id', { id: '@_id' }, {
    update: { method: 'PUT' }
  });
}
