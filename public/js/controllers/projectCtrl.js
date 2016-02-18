angular.module('portfolioApp')
	.controller('projectCtrl', ['$scope', function mainCtrl($scope) {
		'use strict';
		var vm = $scope;
		if(!$scope.user){
			$scope.emit('NO_USER', {});
		}
		vm.projects = $scope.user.projects;
    vm.selectedTech = {};
    vm.info = false;
    vm.showInfo = function(tech){
      vm.selectedTech.name = tech.name;
      vm.selectedTech.icon = tech.icon;
      vm.selectedTech.type = tech.type;
      vm.info = true;
    }
    vm.hideInfo = function(){
      vm.info = false;
    }
	}]);
