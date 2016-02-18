angular.module('portfolioApp').controller('educationCtrl', ['$scope', '$interval', function($scope, $interval){
  var vm = $scope;
  if(!$scope.user){
    $scope.emit('No user', {});
  }
  vm.schools = $scope.user.education
}])
