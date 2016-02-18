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
 this.populateUser = function(userId){
   this.getUser(userId).then(function(user){
     user = user.data;
   })
 }
 this.populateUser('56af7da8d4c6d6ab9227851e')
 this.findUser = function(){
   return user;
 }
}])
