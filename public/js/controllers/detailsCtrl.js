angular.module('portfolioApp').controller('detailsCtrl', ['$scope', '$interval', function($scope, $interval){
  var vm = $scope;
  $interval(function(){
    vm.uptime = Date.now() - vm.server.details.started
  }, 40)
}])
