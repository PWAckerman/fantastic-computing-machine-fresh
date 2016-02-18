angular.module('portfolioApp')
	.controller('projectCtrl', ['$scope', 'user', function mainCtrl($scope, user) {
		'use strict';
		var vm = $scope;
		var user = user.data;
		vm.projects = user.projects;
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
