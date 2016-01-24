angular.module('portfolioApp', ['ui.router'])
	.config(function ($stateProvider, $urlRouterProvider) {
		var mainConfig = {
			url: '/',
			templateUrl: '/partials/main.html',
			controller: 'mainCtrl',
			resolve: {}
		};
		var projectConfig = {
			url: '/projects',
			templateUrl: '/partials/projects.html',
			controller: 'projectCtrl',
			resolve: {}
		};
		$stateProvider
			.state('main', mainConfig)
			.state('projects', projectConfig);

		$urlRouterProvider.otherwise('/')
	});

// require('todoStorage');
// require('todoFocus');
// require('todoEscape');
// require('footer');
