angular.module('portfolioApp').controller('masterCtrl', ['$scope', 'userService', 'serverService', 'blurbService', function($scope, userService, serverService, blurbService){
  var vm = $scope;
  vm.user = $scope.user;
  vm.data = {};
  vm.$on('NO_USER', function(){
    vm.user = userService.findUser();
  })
  serverService.getServer().then(
    function(data){
      vm.server = data
    }
  )
}])
