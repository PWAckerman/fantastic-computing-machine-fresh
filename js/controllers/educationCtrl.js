angular.module('portfolioApp').controller('educationCtrl', ['$scope', '$interval', 'educationService', function($scope, $interval, educationService){
  var vm = $scope;
  vm.schools = educationService.getEducation();
}])
