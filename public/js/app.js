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
		var contactConfig = {
			url: '/contact',
			templateUrl: '/partials/contact.html',
			controller: 'contactCtrl',
			resolve: {}
		};
		var educationConfig = {
			url: '/education',
			templateUrl: '/partials/education.html',
			controller: 'educationCtrl',
			resolve: {}
		};
		var writingsConfig = {
			url: '/writings',
			templateUrl: '/partials/writings.html',
			controller: 'writingsCtrl',
			resolve: {}
		};
		$stateProvider
			.state('main', mainConfig)
			.state('projects', projectConfig)
			.state('contact', contactConfig)
			.state('education', educationConfig)
			.state('writings', writingsConfig)

		$urlRouterProvider.otherwise('/')
	});

// require('todoStorage');
// require('todoFocus');
// require('todoEscape');
// require('footer');
