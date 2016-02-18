angular.module('portfolioApp').controller('navController', ['$state', '$scope', '$timeout', function($state, $scope, $timeout){
  var vm = $scope;
  vm.menuState = true;
  vm.menuToggle = function(){
    vm.menuState = !vm.menuState
  }
  vm.goProjects = function(){
    $state.go('abs.projects')
    vm.menuToggle()
  }
  vm.goEducation = function(){
    $state.go('abs.education')
    vm.menuToggle()
  }
  vm.goWritings = function(){
    $state.go('abs.microblog')
    vm.menuToggle()
  }
  vm.goContact = function(){
    $state.go('abs.contact')
    vm.menuToggle()
  }
  vm.goHome = function(){
    $state.go('abs.main')
  }
  vm.goDetails = function(){
    $state.go('abs.details')
  }
  vm.serverHide = false;
  vm.showServer = function(){
    vm.serverHide = !vm.serverHide
    $timeout(function(){
      vm.serverHide = !vm.serverHide
    }, 5000)
  }
}])
