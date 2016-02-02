angular.module('portfolioApp').service('userService', ['$http', '$q', function($http, $q){
 var user = '';
 this.getUser = function(userId){
   console.log(userId)
   var dfd = $q.defer();
   $http({
     method: 'GET',
     url: '/api/user/' + userId
   }).then(
     function(user){
       console.log(user)
       dfd.resolve(user)
     }
   )
   return dfd.promise;
 }
}])
