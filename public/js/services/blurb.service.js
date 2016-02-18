angular.module('portfolioApp').service('blurbService', ['$http', '$q', function($http, $q){
  var blurbs = ''
  this.getBlurbs = function(userId){
    var dfd = $q.defer();
    $http({
      method: 'GET',
      url: '/api/blurb/' + userId,
      cache: true
    }).then(
      function(blurbs){
        dfd.resolve(blurbs.data)
      }
    )
    return dfd.promise;
  }

}])
