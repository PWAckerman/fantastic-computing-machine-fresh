angular.module('portfolioApp').controller('educationCtrl', ['$scope', '$interval', function($scope, $interval){
  var vm = $scope;
  vm.schools = $scope.user.education
}])
