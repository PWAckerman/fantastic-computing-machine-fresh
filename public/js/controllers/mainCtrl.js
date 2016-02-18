angular.module('portfolioApp')
	.controller('mainCtrl', ['$scope', '$timeout', 'anchorSmoothScroll', '$location', 'user', 'blurbs', function mainCtrl($scope, $timeout, anchorSmoothScroll, $location, user, blurbs) {
		'use strict';
		var vm = $scope;
		var user = user.data;
		vm.projects = user.projects;
		vm.stack = user.stack;
		vm.commits = user.commits;
		vm.skills = user.skills;
		vm.learnings = user.learnings;
		vm.name = user.name;
		vm.blurb = blurbs[Math.floor(blurbs.length * Math.random())].blurb;

		vm.gotoStats = function() {
      var newHash = 'stats';
			$location.hash(newHash);
			anchorSmoothScroll.scrollTo(newHash);
    };
		vm.selectedTech = {};$scope.gotoAnchor = function(x) {
      var newHash = 'anchor' + x;
      if ($location.hash() !== newHash) {
        $location.hash('anchor' + x);
      } else {
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
	}]);
