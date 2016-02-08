angular.module('portfolioApp', ['ui.router'])
	.config(["$stateProvider", "$urlRouterProvider", "$compileProvider", "$httpProvider", "$locationProvider", function ($stateProvider, $urlRouterProvider, $compileProvider, $httpProvider, $locationProvider) {
		$httpProvider.useApplyAsync(1000);
		//Uncomment before deployment:
		$compileProvider.debugInfoEnabled(false);
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
		var detailsConfig = {
			url: '/details',
			templateProvider: function($templateCache){ return $templateCache.get('details.html')},
			controller: 'detailsCtrl',
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
			.state('details', detailsConfig)

		$urlRouterProvider.otherwise('/')
	}])
	.run(['$anchorScroll', function($anchorScroll) {
  	$anchorScroll.yOffset = 60; 
}])

// require('todoStorage');
// require('todoFocus');
// require('todoEscape');
// require('footer');
