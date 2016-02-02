angular.module('portfolioApp').controller('masterCtrl', ['$scope', 'userService', function($scope, userService){
  var vm = $scope;
  vm.user = '';
  userService.getUser('56af7da8d4c6d6ab9227851e').then(
    function(result){
      console.log(result);
      vm.user = result.data;
    }
  )
}])
