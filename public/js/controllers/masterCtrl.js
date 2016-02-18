angular.module('portfolioApp').controller('masterCtrl', ['$scope', 'userService', 'serverService', 'blurbService', function($scope, userService, serverService, blurbService){
  var vm = $scope;
  vm.user = $scope.user;
  vm.data = {};
  vm.$on('NO_USER', function(){
    vm.user = userService.findUser();
  })
  // userService.getUser('56af7da8d4c6d6ab9227851e').then(
  //   function(result){
  //     vm.user = result.data;
  //   }
  // )
  serverService.getServer().then(
    function(data){
      vm.server = data
    }
  )
  // blurbService.getBlurbs('56af7da8d4c6d6ab9227851e').then(
  //   function(blurbs){
  //     vm.blurb = blurbs[Math.floor(Math.random() * blurbs.length)].blurb
  //   }
  // )
  // vm.serverHide = true;
  // vm.showServer = function(){
  //   vm.serverHide = !vm.serverHide
  // }
}])
