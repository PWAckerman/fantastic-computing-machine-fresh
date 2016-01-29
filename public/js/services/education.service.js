angular.module('portfolioApp').service('educationService', ['$http', function($http){
  var education = [
    {
      "name" : "Drexel University",
      "location" : "Philadelphia, PA",
      "logo" : "http://www.pages.drexel.edu/~sfc38/drexel.jpg",
      "degree" : "Master of Science, Information Systems",
      "curriculum" : "Master of Science in Information Systems (MSIS), 4.0 GPA \n\nCoursework in Human-Computer Interaction, Cognition, System Analysis & Design, Development Methodologies, and Collaborative Computing Systems \n\nStudent Member of the Association for Computing Machinery \n\n Upsilon Pi Epsilon Honors Society Inductee",
      "attended" : "2014-2015"
    },
    {
      "name" : "DevMountain",
      "location" : "Dallas, TX",
      "logo" : "https://devmounta.in/img/logoonly.png",
      "degree" : "Full-Time Immersive Web Development Bootcamp",
      "curriculum" : "Full-Time Immersive Web Development Bootcamp \n\n Instructor-led and mentor-guided Full-Stack Javascript  (MEAN) curriculum integrating Angular.js, Node.js, and MongoDB",
      "attended" : "2015-2016"
    },
    {
      "name" : "Saint Joseph's University",
      "location" : "Philadelphia, PA",
      "logo" : "http://sites.sju.edu/inauguration/wp-content/themes/presidentalsearch/assets/img/sju_red_small.png",
      "curriculum" : "Bachelor of Science in Business Administration (BBA), Food Marketing Major \n\n Beta Gamma Sigma Honors Society Inductee \n\nStudent Scholar, May 2007",
      "degree" : "Bachelor of Business Administration",
      "attended" : "2015-2016"
    }
  ];
  this.getEducation = function(){
    return education;
  }
}]);
