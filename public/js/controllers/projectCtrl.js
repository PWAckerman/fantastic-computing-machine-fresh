angular.module('portfolioApp')
	.controller('projectCtrl', ['$scope','projectService', function mainCtrl($scope, projectService) {
		'use strict';
		var vm = $scope;
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
