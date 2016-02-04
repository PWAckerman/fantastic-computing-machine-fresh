angular.module('portfolioApp').controller('masterCtrl', ['$scope', 'userService', 'serverService', function($scope, userService, serverService){
  var vm = $scope;
  vm.user = '';
  vm.data = {};
  userService.getUser('56af7da8d4c6d6ab9227851e').then(
    function(result){
      console.log(result);
      vm.user = result.data;
    }
  )
  serverService.getServer().then(
    function(data){
      console.info(data.message);
      vm.server = data
    }
  )
  // vm.serverHide = true;
  // vm.showServer = function(){
  //   vm.serverHide = !vm.serverHide
  // }
}])
