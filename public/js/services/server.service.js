angular.module('portfolioApp').service('serverService', ['$http', '$q', function($http, $q){
  this.getServer = function(){
    var dfd = $q.defer();
    $http({
      method: 'GET',
      url: '/api/server'
    }).then(
      function(result){
        dfd.resolve(result.data)
      }
    )
    return dfd.promise;
  }
}])
