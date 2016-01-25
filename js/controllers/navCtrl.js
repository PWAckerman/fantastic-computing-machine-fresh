angular.module('portfolioApp').controller('navController', ['$state', '$scope', function($state, $scope){
  var vm = $scope;
  vm.goProjects = function(){
    $state.go('projects')
  }
  vm.goEducation = function(){
    $state.go('education')
  }
  vm.goWritings = function(){
    $state.go('writings')
  }
  vm.goContact = function(){
    $state.go('contact')
  }
  vm.goHome = function(){
    $state.go('main')
  }
}])
