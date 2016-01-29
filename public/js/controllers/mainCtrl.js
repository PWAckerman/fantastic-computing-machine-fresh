angular.module('portfolioApp')
	.controller('mainCtrl', ['$scope','projectService', 'utilService', function mainCtrl($scope, projectService, utilService) {
		'use strict';
		var vm = $scope;
		vm.projects = [];
		projectService.getProjects().then(
			function(res){
				vm.projects = res
			}
		);
		vm.commits = utilService.getCommits();
		vm.stack = utilService.getStack();
		vm.skills = utilService.getSkills();
		vm.learnings = utilService.getLearnings();
	}]);
