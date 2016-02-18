angular.module('portfolioApp').controller('detailsCtrl', ['$scope', '$interval', function($scope, $interval){
  var vm = $scope;
  if(!$scope.user){
    $scope.$emit('NO_USER', {});
  }
  $interval(function(){
    vm.uptime = Date.now() - vm.server.details.started
  }, 40)
}])
