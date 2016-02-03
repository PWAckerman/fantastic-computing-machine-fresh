angular.module('portfolioApp')
	.controller('mainCtrl', ['$scope', '$timeout','projectService', 'utilService', function mainCtrl($scope, $timeout, projectService, utilService) {
		'use strict';
		var vm = $scope;
		vm.projects = $scope.user.projects
		// projectService.getProjects().then(
		// 	function(res){
		// 		vm.projects = res
		// 	}
		// );
		// vm.commits = utilService.getCommits();
		// vm.stack = utilService.getStack();
		// vm.skills = utilService.getSkills();
		// vm.learnings = utilService.getLearnings();
		vm.selectedTech = {};
		vm.showInfo = function(tech){
			vm.selectedTech.name = tech.name || tech.skill.name;
			vm.selectedTech.icon = tech.icon || tech.skill.icon;
			vm.selectedTech.type = tech.type || tech.skill.type;
			vm.info = true;
		}
		vm.hideInfo = function(){
			vm.info = false;
		}
		$timeout(function(){
			console.log($scope.user.projects)
			vm.projects = $scope.user.projects
			console.log($scope.user.skills)
			vm.skills = $scope.user.skills
			console.log($scope.user.learnings)
			vm.learnings = $scope.user.learnings
			console.log($scope.user.education)
			vm.commits = $scope.user.commits
			vm.stack = $scope.user.stack
			vm.name = $scope.user.name
		}, 1000)
	}]);
