angular.module('portfolioApp').controller('microblogCtrl', ['$scope', '$interval', function($scope, $interval){
  var vm = $scope;
  function getWords(str) {
    var arr = [];
    str.replace(/#[a-z]+/g, function(m) {
      arr.push(m.slice(1));
    });
    return arr;
  }
  var preEntries = [
    {
      "text" : "Just used #hapi to transition from #express. Much easier than #koa.",
      "date" : Date.now()
    },
    {
      "text" : "Damn, #react is dumb. #redux is even dumber.",
      "date" : Date.now()
    }
  ]
  vm.entries = preEntries.map(function(entry){
    var tags = getWords(entry.text)
    return {
      text: entry.text,
      date: entry.date,
      tags: tags
    }
  })
}])
