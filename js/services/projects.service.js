angular.module('portfolioApp').service('projectService', ['$http', '$q', function($http, $q){
  var projects = []

  this.getProjects = function(){
    var dfd = $q.defer()
    $http.get('projects.json').then(
      function(data){
        dfd.resolve(data.data)
      }
    )
    return dfd.promise;
  }
}])
