angular.module('portfolioApp').service('sendgridService', ['$http', '$q', function($http, $q){
  this.sendEmail = function(email, userid){
    var dfd = $q.defer();
    $http({
      method: 'POST',
      url: '/api/sendmail/' + userid,
      data: email
    }).then(
      function(result){
        dfd.resolve(result.data)
      }
    )
    return dfd.promise;
  }
}])
