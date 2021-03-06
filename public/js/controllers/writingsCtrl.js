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
