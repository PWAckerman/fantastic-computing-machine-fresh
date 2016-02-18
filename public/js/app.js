angular.module('portfolioApp', ['ui.router'])
	.config(["$stateProvider", "$urlRouterProvider", "$compileProvider", "$httpProvider", "$locationProvider", function ($stateProvider, $urlRouterProvider, $compileProvider, $httpProvider, $locationProvider) {
		$httpProvider.useApplyAsync(1000);
		//Uncomment before deployment:
		$compileProvider.debugInfoEnabled(false);
		var abstractConfig = {
			abstract: true,
			url: '',
			resolve: {
				user: function(userService){
					return userService.getUser('56af7da8d4c6d6ab9227851e')
				},
				blurbs: function(blurbService){
					return blurbService.getBlurbs('56af7da8d4c6d6ab9227851e')
				}
			},
			template: "<ui-view></ui-view>"
		};
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
		var microblogConfig = {
			url: '/microblog',
			templateProvider: function($templateCache){ return $templateCache.get('writings.html')},
			controller: 'microblogCtrl',
			resolve: {}
		};
		$stateProvider
			.state('abs', abstractConfig)
			.state('abs.main', mainConfig)
			.state('abs.projects', projectConfig)
			.state('abs.contact', contactConfig)
			.state('abs.education', educationConfig)
			.state('abs.microblog', microblogConfig)
			.state('abs.details', detailsConfig)

		$urlRouterProvider.otherwise('/')
	}])
	.run(['$anchorScroll', '$rootScope', 'userService', function($anchorScroll) {
  	$anchorScroll.yOffset = 60;
}])

// require('todoStorage');
// require('todoFocus');
// require('todoEscape');
// require('footer');
