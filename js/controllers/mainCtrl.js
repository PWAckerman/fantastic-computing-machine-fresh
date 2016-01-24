angular.module('portfolioApp')
	.controller('mainCtrl', ['$scope','projectService', function mainCtrl($scope, projectService) {
		'use strict';
		var vm = $scope;
		vm.projects = [];
		projectService.getProjects().then(
			function(res){
				vm.projects = res
			}
		);
	}]);
