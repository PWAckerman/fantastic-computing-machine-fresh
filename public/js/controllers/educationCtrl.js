angular.module('portfolioApp').controller('educationCtrl', ['$scope', '$interval', 'user', function($scope, $interval, user){
  var vm = $scope;
  var user = user.data;
  vm.schools = user.education
}])
