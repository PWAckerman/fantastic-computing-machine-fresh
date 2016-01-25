angular.module('portfolioApp').service('educationService', ['$http', function($http){
  var education = [
    {
      "name" : "Drexel University",
      "location" : "Philadelphia, PA",
      "logo" : "http://www.pages.drexel.edu/~sfc38/drexel.jpg",
      "degree" : "Master of Science, Information Systems",
      "attended" : "2014-2015"
    },
    {
      "name" : "DevMountain",
      "location" : "Dallas, TX",
      "logo" : "https://devmounta.in/img/logoonly.png",
      "degree" : "Full-Time Immersive Web Development Bootcamp",
      "attended" : "2015-2016"
    },
    {
      "name" : "Saint Joseph's University",
      "location" : "Philadelphia, PA",
      "logo" : "http://sites.sju.edu/inauguration/wp-content/themes/presidentalsearch/assets/img/sju_red_small.png",
      "degree" : "Bachelor of Business Administration",
      "attended" : "2015-2016"
    }
  ];
  this.getEducation = function(){
    return education;
  }
}]);
