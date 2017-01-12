angular.module('cityApp')
  .factory('Deal', Deal);

function Deal($resource) {
  return new $resource('/deals/:id', { id: '@_id' }, {
    update: { method: 'PUT' }
  });
}
