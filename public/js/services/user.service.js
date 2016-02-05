angular.module('portfolioApp').service('userService', ['$http', '$q', function($http, $q){
 var user = '';
 this.getUser = function(userId){
   var dfd = $q.defer();
   $http({
     method: 'GET',
     url: '/api/user/' + userId,
     cache: true
   }).then(
     function(user){
       dfd.resolve(user)
     }
   )
   return dfd.promise;
 }
}])
