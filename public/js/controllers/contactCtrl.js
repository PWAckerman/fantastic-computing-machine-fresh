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
