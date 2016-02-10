angular.module('portfolioApp').service('entryService', ['$http', '$q', function($http, $q){
  this.getEntries = function(userId){
    var dfd = $q.defer();
    $http({
      method: 'GET',
      url: '/api/entry/all/' + userId,
      cache: true
    }).then(
      function(entries){
        dfd.resolve(entries.data)
      }
    )
    return dfd.promise;
  }
}])
