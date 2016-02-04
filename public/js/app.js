angular.module('portfolioApp', ['ui.router'])
	.config(function ($stateProvider, $urlRouterProvider) {
		var mainConfig = {
			url: '/',
			templateProvider: function($templateCache){ return $templateCache.get('main.html')},
			controller: 'mainCtrl',
			resolve: {}
		};
		var projectConfig = {
			url: '/projects',
			templateProvider: function($templateCache){ return $templateCache.get('projects.html')},
			controller: 'projectCtrl',
			resolve: {}
		};
		var contactConfig = {
			url: '/contact',
			templateProvider: function($templateCache){ return $templateCache.get('contact.html')},
			controller: 'contactCtrl',
			resolve: {}
		};
		var educationConfig = {
			url: '/education',
			templateProvider: function($templateCache){ return $templateCache.get('education.html')},
			controller: 'educationCtrl',
			resolve: {}
		};
		var writingsConfig = {
			url: '/writings',
			templateProvider: function($templateCache){ return $templateCache.get('writings.html')},
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
