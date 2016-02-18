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

angular.module("portfolioApp").run(["$templateCache", function($templateCache) {$templateCache.put("contact.html","<div class=\"row clear-nav\">\n  <div class=\"central brightfont\">\n    <section class=\"projects-box\">\n      <div class=\"row medium-text left-align margin-bottom\">\n        <div class=\"central\">\n          <span class=\"medium-geld\">C</span>ontact\n          <span class=\"medium-geld\">\n            <div class=\"icon-basic-mail contact-selection\" ng-click=\"showEmail()\"></div>\n            <div class=\"icon-basic-smartphone contact-selection\" ng-click=\"showText()\"></div>\n            <a href=\"{{::user.linkedinurl}}\"><div class=\"contact-selection\" style=\"background-color: rgb(61, 155, 215);\" ><img src=\"./images/linkedin.png\" class=\"contact-img\"/></div></a>\n            <a href=\"{{::user.githuburl}}\"><div class=\"contact-selection\" style=\"background-color: rgb(61, 215, 123);\" ><img src=\"./images/social-github-outline.png\" class=\"contact-img\"/></div></a>\n          </div>\n        </div>\n        <div class=\"row\" ng-switch on=\"medium\">\n          <div class=\"contact-container fadeinload\" ng-switch-when=\"email\">\n            <div class=\"row medium-text left-align margin-bottom\">E-Mail</div>\n            <form ng-submit=\"sendEmail()\">\n              <input class=\"top-round border-bottom\" ng-model=\"newMail.from\" placeholder=\"From...\" required type=\"email\"/>\n              <input class=\"border-bottom\" ng-model=\"newMail.subject\" placeholder=\"Subject...\" required type=\"text\"/>\n              <textarea class=\"message bottom-round\" draggable=\"false\" ng-model=\"newMail.text\" placeholder=\"Message...\" required/></textarea>\n            <div class=\"row\">\n              <button class=\"submit\" ng-disabled=\"!newMail.from || !newMail.subject || !newMail.text\" type=\"submit\">SUBMIT EMAIL</button>\n            </div>\n          </form>\n        </div>\n        <div class=\"contact-container fadeinload\" ng-switch-when=\"text\">\n          <div class=\"row medium-text left-align margin-bottom\">Text Message</div>\n          <form ng-submit=\"sendText()\">\n            <input class=\"top-round border-bottom\" ng-model=\"newText.sender\" placeholder=\"Name...\" required type=\"text\"/>\n            <input class=\"border-bottom\" ng-model=\"newText.number\" placeholder=\"Number...\" required type=\"tel\"/>\n            <input class=\"border-bottom\" ng-model=\"newText.company\" placeholder=\"Company (optional)...\" type=\"text\"/>\n            <input class=\"bottom-round border-bottom\" ng-model=\"newText.email\" placeholder=\"Email...\" required type=\"email\"/>\n            <div class=\"row\" style=\"text-align: center;\">\n              <button class=\"submit\" ng-disabled=\"!newText.sender || !newText.number || !newText.email\" type=\"submit\">SUBMIT TEXT</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </section>\n  </div>\n</div>\n");
$templateCache.put("details.html","<div class=\"row clear-nav\">\n  <div class=\"central brightfont\">\n    <section class=\"projects-box\">\n      <div class=\"row medium-text left-align margin-bottom\">\n        <div class=\"central\">\n          <span class=\"medium-geld\">D</span>etails</div>\n      </div>\n      <div class=\"row\">\n        <div class=\"skills-box\">\n          <div class=\"row details-row\">\n            <div class=\"details-container\">\n              <span style=\"font-weight: 400;\">Deployment Platform:</span>\n              <div class=\"detail-float\">{{::server.details.platform}}<img class=\"smallio\" ng-src=\"{{::server.details.platform_logo}}\"/></div>\n            </div>\n          </div>\n          <div class=\"row details-row\">\n            <div class=\"details-container\">\n              <span style=\"font-weight: 400;\">Stack:</span>\n              <div class=\"detail-float\">{{::server.details.stack}}</div>\n            </div>\n          </div>\n          <div class=\"row details-row\">\n            <div class=\"details-container\">\n              <span style=\"font-weight: 400;\">Runtime:</span>\n              <div class=\"detail-float\">{{::server.details.runtime}}<img class=\"smallio\" ng-src=\"{{::server.details.runtime_logo}}\"/></div>\n            </div>\n          </div>\n          <div class=\"row details-row\">\n            <div class=\"details-container\">\n              <span style=\"font-weight: 400;\">Server Framework:</span>\n              <div class=\"detail-float\">{{::server.framework}}\n                {{server.version}}<img class=\"smallio\" ng-src=\"{{::server.image}}\"/></div>\n            </div>\n          </div>\n          <div class=\"row details-row\">\n            <div class=\"details-container\">\n              <span style=\"font-weight: 400;\">Database:</span>\n              <div class=\"detail-float\">{{::server.details.database}}<img class=\"smallio\" ng-src=\"{{::server.details.database_logo}}\"/></div>\n            </div>\n          </div>\n          <div class=\"row details-row\">\n            <div class=\"details-container\">\n              <span style=\"font-weight: 400;\">Cache:</span>\n              <div class=\"detail-float\">{{::server.details.cache}}<img class=\"smallio\" ng-src=\"{{::server.details.cache_logo}}\"/></div>\n            </div>\n          </div>\n          <div class=\"row details-row\">\n            <div class=\"details-container\">\n              <span style=\"font-weight: 400;\">Started:</span>\n              <div class=\"detail-float\">{{::server.details.started | date : \'medium\'}}</div>\n            </div>\n          </div>\n          <div class=\"row details-row\">\n            <div class=\"details-container\">\n              <span style=\"font-weight: 400;\">Uptime:</span>\n              <div class=\"detail-float\">{{uptime - (1000000 * 68.4) | date: \'HH:mm:ss\'}}</div>\n            </div>\n          </div>\n          <div class=\"row details-row\">\n            <div class=\"details-container\">\n              <span style=\"font-weight: 400;\">Memory Usage:</span>\n              <div class=\"detail-float\">{{server.details.memory}}</div>\n            </div>\n          </div>\n          <div class=\"row details-row\">\n            <div class=\"details-container\">\n              <span style=\"font-weight: 400;\">PID:</span>\n              <div class=\"detail-float\">{{server.details.PID}}</div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n  </div>\n</div>\n</div>\n");
$templateCache.put("education.html","<div class=\"row clear-nav\">\n  <div class=\"central brightfont\">\n    <section class=\"projects-box fadeinload\">\n      <div class=\"row medium-text left-align margin-bottom\"><div class=\"central\"><span class=\"medium-geld\">E</span>ducation<span class=\"medium-geld\"></div></div>\n      <div class=\"row\">\n        <div class=\"school-box\" ng-repeat=\"school in ::schools track by $index\">\n          <img class=\"school-logo\" src=\"{{::school.institution.image}}\">\n          <div class=\"row\"><div class=\"school-name\">{{::school.institution.name}}</div></div>\n          <div class=\"row\"><div class=\"school-attended\">{{::school.institution.location}}</div></div>\n          <div class=\"row\"><div class=\"school-attended\"><i>{{::school.degree}}</i></div></div>\n          <div class=\"row\"><div class=\"school-attended\">{{::school.attended}}</div></div>\n          <div class=\"row\"><div class=\"school-curriculum\">{{::school.description}}</div></div>\n        </div>\n      </div>\n    </section>\n  </div>\n</div>\n");
$templateCache.put("footer.html","<footer id=\"footer\" ng-show=\"todos.length\" ng-cloak>\n					<span id=\"todo-count\"><strong>{{remainingCount}}</strong>\n						<ng-pluralize count=\"remainingCount\" when=\"{ one: \'item left\', other: \'items left\' }\"></ng-pluralize>\n					</span>\n    <ul id=\"filters\">\n        <li>\n            <a ng-class=\"{selected: status == \'\'} \" href=\"#/\">All</a>\n        </li>\n        <li>\n            <a ng-class=\"{selected: status == \'active\'}\" href=\"#/active\">Active</a>\n        </li>\n        <li>\n            <a ng-class=\"{selected: status == \'completed\'}\" href=\"#/completed\">Completed</a>\n        </li>\n    </ul>\n    <button id=\"clear-completed\" ng-click=\"clearCompletedTodos()\" ng-show=\"completedCount\">Clear completed ({{completedCount}})</button>\n</footer>");
$templateCache.put("main.html","<div class=\"video-container\">\n  <video class=\"hero-video\" loop=\"loop\" autoplay=\"autoplay\">\n    <source src=\"./videos/Hello-World/Hello-World.mp4\" type=\"video/mp4\"/>\n    <source src=\"./videos/Hello-World/Hello-World.webm\" type=\"video/webm\"/>\n  </video>\n  <div class=\"hero-blurb\">\n    <span style=\"text-transform: uppercase;\">\"{{blurb}}\"</span><br>\n    <div style=\"line-height: 20px;\">\n      <span style=\"font-size: 20px;\">-\n        <i>Patrick Ackerman</i>,<br>\n        MEAN Stack Developer</span><br>\n    </div>\n  </div>\n  <div class=\"hero-arrow-container\"><img class=\"hero-arrow\" ng-click=\"gotoStats()\" src=\"https://irp-cdn.multiscreensite.com/b76d3dfe/dms3rep/multi/mobile/arrow-down-white-261x274.dm.edit_y55pl1.png\"/></div>\n</div>\n<div class=\"row clear-nav\" id=\"stats\">\n  <div class=\"central brightfont\">\n    <div class=\"title-bar\">\n      <div class=\"title-bar-title fadeinload\">{{::name}}</div>\n    </div>\n    <div class=\"small-row\">\n      <div class=\"stat-box right fadeinload\">\n        <div class=\"row\">Github Commits\n        </div>\n        <div class=\"row stat\"><img class=\"stat-icon\" src=\"images/github-sociocon.png\"/>{{::commits}}&nbsp;</div>\n      </div>\n      <div class=\"stat-box left fadeinload\">\n        <div class=\"row\">Stack Overflow\n        </div>\n        <div class=\"row\"><img class=\"stat-icon\" src=\"images/stackoverflow-6-multi-size.ico\"/>\n          <div class=\"row stat small-medium-text-important\">{{::stack.score}}&nbsp;</div>\n          <div class=\"row stat small-medium-text-important\">{{::stack.badges}}&nbsp;</div>\n        </div>\n      </div>\n    </div>\n    <section class=\"skills-box fadeinload\">\n      <div class=\"row medium-text\">Skills</div>\n      <div class=\"tech-container-container\">\n        <div class=\"tech-container fadeinload\" ng-mouseleave=\"hideInfo()\" ng-mouseover=\"showInfo(skill)\" ng-repeat=\"skill in ::skills track by $index\">\n          <img class=\"tech-icon fadeinload\" imageonload ng-src=\"{{::skill.icon}}\"/>\n          <span class=\"loading\">\n            <img class=\"spinny\" src=\"./images/loading.gif\"/></span>\n        </div>\n      </div>\n    </section>\n    <section class=\"skills-box fadeinload\">\n      <div class=\"row medium-text\">Learning</div>\n      <div class=\"tech-container-container\">\n        <div class=\"tech-container fadeinload\" ng-mouseleave=\"hideInfo()\" ng-mouseover=\"showInfo(learning)\" ng-repeat=\"learning in ::learnings track by $index\">\n          <img class=\"tech-icon fadeinload\" imageonload ng-src=\"{{::learning.skill.icon}}\"/>\n          <span class=\"loading\">\n            <img class=\"spinny\" src=\"./images/loading.gif\"/></span>\n          <div class=\"empty-bar\">\n            <div class=\"progress-bar\" style=\"width: {{::learning.progress || 0}}%\"></div>\n          </div>\n        </div>\n      </div>\n    </section>\n    <section class=\"projects-box fadeinload\">\n      <div class=\"row medium-text left-align margin-bottom\">\n        <div class=\"central\">\n          <span class=\"medium-geld\">R</span>ecent\n          <span class=\"medium-geld\">P</span>rojects</div>\n      </div>\n      <div class=\"row\">\n        <div class=\"project-container\" ng-repeat=\"project in ::projects track by $index | limitTo: 3\">\n          <div class=\"project-img-container\">\n            <img class=\"project-img\" imageonload ng-src=\"{{::project.screenshot}}\"/>\n            <span class=\"loading\">\n              <img class=\"spinny\" src=\"./images/loading.gif\"/></span>\n          </div>\n          <div class=\"row\">\n            <i class=\"icon-{{::project.platforms[0].icon}} platform-icon2\"></i>\n            <span class=\"small-medium-text line-height-match\" style=\"margin-top: 5px; float: right;\">{{::project.title}}</spn>\n          </div>\n        </div>\n      </div>\n    </section>\n    <div class=\"info-box brightfont fadeinload\" ng-show=\"info\">\n      <div class=\"row small-medium-text small-margin\">{{selectedTech.name}}</div>\n      <div class=\"row\"><img class=\"tech-icon-large\" ng-src=\"{{selectedTech.icon}}\"/></div>\n      <div class=\"tech-type-large\" style=\"width: 90%; text-align: center;\">{{selectedTech.type}}</div>\n    </div>\n  </div>\n</div>\n");
$templateCache.put("projects.html","<div class=\"row clear-nav\">\n  <div class=\"central brightfont\">\n    <section class=\"projects-box fadeinload\">\n      <div class=\"row medium-text left-align margin-bottom\"><div class=\"central\"><span class=\"medium-geld\">P</span>rojects</div></div>\n      <div class=\"row\">\n        <div class=\"central\">\n          <div class=\"project-box fadeinload growinload\" ng-repeat=\"project in ::projects track by $index | limitTo: 3\">\n            <div class=\"project-screenshot-container\">\n              <img ng-src=\"{{::project.screenshot}}\" class=\"project-screenshot fadeinload\"/>\n            </div>\n            <div class=\"row\">\n              <div class=\"project-title\">{{::project.title}}&nbsp;<div>\n              <div ng-repeat=\"platform in ::project.platforms track by $index\" style=\"display: inline-block;\">\n                <i class=\"icon-{{::platform.icon}} platform-icon\"></i>\n              </div>\n            </div>\n            <div class=\"project-description\" style=\"white-space:pre-wrap;\">{{::project.description}}</div>\n            <div class=\"row tech-icon-row\">\n              <div ng-repeat=\"tech in ::project.technologies track by $index\" class=\"tech-container fadeinload\">\n                <img ng-src=\"{{::tech.icon}}\" class=\"tech-icon fadeinload\" ng-mouseover=\"showInfo(tech)\" ng-mouseleave=\"hideInfo()\"/></div>\n              </div>\n          </div>\n          </div>\n        </div>\n      </div>\n    </section>\n  </div>\n  <div ng-show=\"info\" class=\"info-box brightfont fadeinload\">\n    <div class=\"row small-medium-text\">{{selectedTech.name}}</div>\n    <div class=\"row\"><img ng-src=\"{{selectedTech.icon}}\" class=\"tech-icon-large\"/></div>\n    <div class=\"tech-type-large\" style=\"width: 90%;\">{{selectedTech.type}}</div>\n  </div>\n</div>\n</div>\n");
$templateCache.put("writings.html","<div class=\"row clear-nav\">\n  <div class=\"central brightfont\">\n      <section class=\"projects-box\">\n        <div class=\"row medium-text left-align margin-bottom\"><div class=\"central\"><span class=\"medium-geld\">M</span>icroblog<span class=\"medium-geld\"></div></div>\n        <div class=\"row\">\n            <div ng-repeat=\"entry in entries | orderBy: \'-date\'\" class=\"entry-container\">\n              <div class=\"blog-avatar\">\n                <img ng-src=\"{{::user.avatar}}\" class=\"avatar-icon\"/>\n              </div>\n              <div class=\"blog-date\">{{::entry.date | date : \'medium\'}}</div>\n              <div class=\"blog-text\">{{::entry.text}}</div>\n              <div class=\"blog-tag-container\">\n              <div ng-repeat=\"tag in entry.tags track by $index\" class=\"blog-tag\">\n                {{::tag}}\n              </div>\n            </div>\n            </div>\n            <div class=\"entry-contaier\" ng-click=\"getMore()\" ng-if=\"showMore\">\n              <div class=\"show-more-text\">SHOW MORE</div>\n              <div class=\"row\"><img class=\"more-arrow\" src=\"https://irp-cdn.multiscreensite.com/b76d3dfe/dms3rep/multi/mobile/arrow-down-white-261x274.dm.edit_y55pl1.png\"/></div>\n            </div>\n        </div>\n      </section>\n      <div id=\"end\"></div>\n    </div>\n  </div>\n</div>\n");}]);
angular.module('portfolioApp').controller('backgroundCtrl', ['$scope', '$interval', function($scope, $interval){
  var vm = $scope;
  // vm.backgroundClass = "body-background";
  // vm.kickoff = function() {
  //   vm.backgroundClass = "body-background2";
  //   var switched = 0;
  //   $interval(function() {
  //     ++switched
  //     vm.backgroundClass === "body-background2" ? vm.backgroundClass = "body-background" : vm.backgroundClass = "body-background2"
  //   }, 100000)
  // }
  // vm.kickoff();
}])

angular.module('portfolioApp').controller('contactCtrl', ['$scope', '$interval', 'twilioService', 'sendgridService', 'user', function($scope, $interval, twilioService, sendgridService, user){
  var vm = $scope;
  vm.newMail = {};
  vm.newText = {};
  vm.medium = "email";
  vm.user = user.data;
  vm.sendText = function(){
    twilioService.sendText(vm.newText, vm.user._id).then(
      function(res){
        console.log(res)
      }
    ).catch(function(err){
      console.log(err)
    })
    vm.newText = {}
  }

  vm.showEmail = function(){
    vm.medium = 'email';
  }
  vm.showText = function(){
    vm.medium = 'text';
  }
  vm.sendEmail = function(){
    sendgridService.sendEmail(vm.newMail, vm.user._id).then(
      function(res){
        console.log(res)
      }
    ).catch(function(err){
      console.log(err)
    })
    vm.newMail = {}
  }

}])

angular.module('portfolioApp').controller('detailsCtrl', ['$scope', '$interval', function($scope, $interval){
  var vm = $scope;
  if(!$scope.user){
    $scope.$emit('NO_USER', {});
  }
  $interval(function(){
    vm.uptime = Date.now() - vm.server.details.started
  }, 40)
}])

angular.module('portfolioApp').controller('educationCtrl', ['$scope', '$interval', 'user', function($scope, $interval, user){
  var vm = $scope;
  var user = user.data;
  vm.schools = user.education
}])

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

angular.module('portfolioApp').controller('masterCtrl', ['$scope', 'userService', 'serverService', 'blurbService', function($scope, userService, serverService, blurbService){
  var vm = $scope;
  vm.user = $scope.user;
  vm.data = {};
  vm.$on('NO_USER', function(){
    vm.user = userService.findUser();
  })
  // userService.getUser('56af7da8d4c6d6ab9227851e').then(
  //   function(result){
  //     vm.user = result.data;
  //   }
  // )
  serverService.getServer().then(
    function(data){
      vm.server = data
    }
  )
  // blurbService.getBlurbs('56af7da8d4c6d6ab9227851e').then(
  //   function(blurbs){
  //     vm.blurb = blurbs[Math.floor(Math.random() * blurbs.length)].blurb
  //   }
  // )
  // vm.serverHide = true;
  // vm.showServer = function(){
  //   vm.serverHide = !vm.serverHide
  // }
}])

angular.module('portfolioApp').controller('navController', ['$state', '$scope', '$timeout', function($state, $scope, $timeout){
  var vm = $scope;
  vm.menuState = true;
  vm.menuToggle = function(){
    vm.menuState = !vm.menuState
  }
  vm.goProjects = function(){
    $state.go('abs.projects')
    vm.menuToggle()
  }
  vm.goEducation = function(){
    $state.go('abs.education')
    vm.menuToggle()
  }
  vm.goWritings = function(){
    $state.go('abs.microblog')
    vm.menuToggle()
  }
  vm.goContact = function(){
    $state.go('abs.contact')
    vm.menuToggle()
  }
  vm.goHome = function(){
    $state.go('abs.main')
  }
  vm.goDetails = function(){
    $state.go('abs.details')
  }
  vm.serverHide = false;
  vm.showServer = function(){
    vm.serverHide = !vm.serverHide
    $timeout(function(){
      vm.serverHide = !vm.serverHide
    }, 5000)
  }
}])

angular.module('portfolioApp')
	.controller('projectCtrl', ['$scope', 'user', function mainCtrl($scope, user) {
		'use strict';
		var vm = $scope;
		var user = user.data;
		vm.projects = user.projects;
    vm.selectedTech = {};
    vm.info = false;
    vm.showInfo = function(tech){
      vm.selectedTech.name = tech.name;
      vm.selectedTech.icon = tech.icon;
      vm.selectedTech.type = tech.type;
      vm.info = true;
    }
    vm.hideInfo = function(){
      vm.info = false;
    }
	}]);

angular.module('portfolioApp').controller('microblogCtrl', ['$scope', '$interval', '$location', 'entryService', 'anchorSmoothScroll', 'user', function($scope, $interval, $location, entryService, anchorSmoothScroll, user){
  var vm = $scope;
  var sliced = 0;
  vm.user = user.data;
  vm.showMore = true;
  function getWords(str) {
    var arr = [];
    str.replace(/#[a-z]+/g, function(m) {
      arr.push(m.slice(1));
    });
    return arr;
  }
  entryService.getEntries(user._id || "56af7da8d4c6d6ab9227851e").then(
    function(entries){
      console.log(entries);
      vm.allEntries = entries.map(function(entry){
        var tags = getWords(entry.text)
        return {
          text: entry.text,
          date: entry.date,
          tags: tags
        }
      })
      vm.entries = vm.allEntries.slice(vm.allEntries.length - 3);
      sliced = 3;
    }
  )
  vm.getMore = function(){
    var begin = vm.allEntries.length - (sliced + 3)
    var end = vm.allEntries.length - sliced
    begin < 0 ? begin = 0 : begin
    end < 0 ? end = 0 : end
    if(begin >= 0 && end > 0){
      vm.entries = vm.entries.concat(vm.allEntries.slice(begin, end));
    } else {
      vm.showMore = false;
    }
    sliced += 3;
    $location.hash('end');
    anchorSmoothScroll.scrollTo('end');
  }
}])

angular.module('portfolioApp').directive('imageonload', function() {
    return {
        restrict: 'A',
        link: function(scope, element) {
          element.on('load', function() {
            // Set visibility: true + remove spinner overlay
              element.removeClass('spinner-hide');
              element.addClass('spinner-show');
              element.parent().find('span').remove();
          });
          scope.$watch('ngSrc', function() {
            // Set visibility: false + inject temporary spinner overlay
              element.addClass('spinner-hide');
              // element.parent().append('<span class="spinner"></span>');
          });
        }
    };
});

angular.module('portfolioApp').service('blurbService', ['$http', '$q', function($http, $q){
  var blurbs = ''
  this.getBlurbs = function(userId){
    var dfd = $q.defer();
    $http({
      method: 'GET',
      url: '/api/blurb/' + userId,
      cache: true
    }).then(
      function(blurbs){
        dfd.resolve(blurbs.data)
      }
    )
    return dfd.promise;
  }

}])

angular.module('portfolioApp').service('entryService', ['$http', '$q', function($http, $q){
  this.getEntries = function(userId){
    var dfd = $q.defer();
    $http({
      method: 'GET',
      url: '/api/entry/all/' + userId,
      cache: true
    }).then(
      function(entries){
        dfd.resolve(entries.data)
      }
    )
    return dfd.promise;
  }
}])

angular.module('portfolioApp').service('anchorSmoothScroll', function(){

    this.scrollTo = function(eID) {

        var startY = currentYPosition();
        var stopY = elmYPosition(eID) - 60;
        var distance = stopY > startY ? stopY - startY : startY - stopY;
        if (distance < 100) {
            scrollTo(0, stopY); return;
        }
        var speed = Math.round(distance / 100);
        if (speed >= 20) speed = 20;
        var step = Math.round(distance / 25);
        var leapY = stopY > startY ? startY + step : startY - step;
        var timer = 0;
        if (stopY > startY) {
            for ( var i=startY; i<stopY; i+=step ) {
                setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
                leapY += step; if (leapY > stopY) leapY = stopY; timer++;
            } return;
        }
        for ( var i=startY; i>stopY; i-=step ) {
            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
            leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
        }

        function currentYPosition() {
            // Firefox, Chrome, Opera, Safari
            if (self.pageYOffset) return self.pageYOffset;
            // Internet Explorer 6 - standards mode
            if (document.documentElement && document.documentElement.scrollTop)
                return document.documentElement.scrollTop;
            // Internet Explorer 6, 7 and 8
            if (document.body.scrollTop) return document.body.scrollTop;
            return 0;
        }

        function elmYPosition(eID) {
            var elm = document.getElementById(eID);
            var y = elm.offsetTop;
            var node = elm;
            while (node.offsetParent && node.offsetParent != document.body) {
                node = node.offsetParent;
                y += node.offsetTop;
            } return y;
        }
    };

});

angular.module('portfolioApp').service('sendgridService', ['$http', '$q', function($http, $q){
  this.sendEmail = function(email, userid){
    var dfd = $q.defer();
    $http({
      method: 'POST',
      url: '/api/sendmail/' + userid,
      data: email
    }).then(
      function(result){
        dfd.resolve(result.data)
      }
    )
    return dfd.promise;
  }
}])

angular.module('portfolioApp').service('serverService', ['$http', '$q', function($http, $q){
  this.getServer = function(){
    var dfd = $q.defer();
    $http({
      method: 'GET',
      url: '/api/server',
      cache: true
    }).then(
      function(result){
        dfd.resolve(result.data)
      }
    )
    return dfd.promise;
  }
}])

angular.module('portfolioApp').service('twilioService', ['$http', '$q', function($http, $q){
  this.sendText = function(text, userid){
    var dfd = $q.defer();
    console.log(text);
    $http({
      method: 'POST',
      url: '/api/sendtext/' + userid,
      data: text
    }).then(
      function(result){
        dfd.resolve(result.data)
      }
    )
    return dfd.promise;
  }
}])

angular.module('portfolioApp').service('userService', ['$http', '$q', function($http, $q){
 var user = '';
 this.getUser = function(userId){
   var dfd = $q.defer();
   $http({
     method: 'GET',
     url: '/api/user/' + userId,
     cache: true
   }).then(
     function(user){
       dfd.resolve(user)
     }
   )
   return dfd.promise;
 }
 this.populateUser = function(userId){
   this.getUser(userId).then(function(user){
     user = user.data;
   })
 }
 this.populateUser('56af7da8d4c6d6ab9227851e')
 this.findUser = function(){
   return user;
 }
}])
