angular.module('portfolioApp').controller('contactCtrl', ['$scope', '$interval', 'twilioService', 'sendgridService', function($scope, $interval, twilioService, sendgridService){
  var vm = $scope;
  vm.newMail = {};
  vm.newText = {};
  vm.medium = "email";
  if(!$scope.user){
    $scope.emit('No user', {});
  }
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
