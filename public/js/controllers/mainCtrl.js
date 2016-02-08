angular.module('portfolioApp')
	.controller('mainCtrl', ['$scope', '$timeout', 'anchorSmoothScroll', '$location', function mainCtrl($scope, $timeout, anchorSmoothScroll, $location) {
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
		vm.gotoStats = function() {
      var newHash = 'stats';
			$location.hash(newHash);

		// call $anchorScroll()
		anchorSmoothScroll.scrollTo(newHash);

    };
		vm.selectedTech = {};$scope.gotoAnchor = function(x) {
      var newHash = 'anchor' + x;
      if ($location.hash() !== newHash) {
        // set the $location.hash to `newHash` and
        // $anchorScroll will automatically scroll to it
        $location.hash('anchor' + x);
      } else {
        // call $anchorScroll() explicitly,
        // since $location.hash hasn't changed
        $anchorScroll();
      }
    };
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
			vm.projects = $scope.user.projects
			vm.skills = $scope.user.skills
			vm.learnings = $scope.user.learnings
			vm.commits = $scope.user.commits
			vm.stack = $scope.user.stack
			vm.name = $scope.user.name
		}, 1000)
	}]);
