angular.module('portfolioApp').service('twilioService', ['$http', '$q', function($http, $q){
  this.sendText = function(text, userid){
    var dfd = $q.defer();
    console.log(text);
    $http({
      method: 'POST',
      url: '/api/sendtext/' + userid,
      data: text
    }).then(
      function(result){
        dfd.resolve(result.data)
      }
    )
    return dfd.promise;
  }
}])
