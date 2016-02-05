angular.module('portfolioApp').controller('navController', ['$state', '$scope', function($state, $scope){
  var vm = $scope;
  vm.menuState = true;
  vm.menuToggle = function(){
    vm.menuState = !vm.menuState
  }
  vm.goProjects = function(){
    $state.go('projects')
    vm.menuToggle()
  }
  vm.goEducation = function(){
    $state.go('education')
    vm.menuToggle()
  }
  vm.goWritings = function(){
    $state.go('writings')
    vm.menuToggle()
  }
  vm.goContact = function(){
    $state.go('contact')
    vm.menuToggle()
  }
  vm.goHome = function(){
    $state.go('main')
  }
  vm.serverHide = false;
  vm.showServer = function(){
    vm.serverHide = !vm.serverHide
  }
}])
